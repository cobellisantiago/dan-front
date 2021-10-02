import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ConstructionListResults from 'src/components/construction/ConstructionListResults';
import ConstructionListToolbar from 'src/components/construction/ConstructionListToolbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchConstruction, fetchConstructionsError, setConstructions } from '../../store/constructions/actions';
import { Constructions } from '../../services';

const ConstructionList = () => {
  const dispatch = useDispatch();

  const {
construction, constructions, fetchingConstruction, errorFetchingConstruction, fetchingConstructions, errorFetchingConstructions
} = useSelector((state) => ({
    construction: state.constructions.construction,
    fetchingConstruction: state.constructions.fetchingConstruction,
    errorFetchingConstruction: state.constructions.errorFetchingConstruction,
    constructions: state.constructions.constructions,
    fetchingConstructions: state.constructions.fetchingConstructions,
    errorFetchingConstructions: state.constructions.errorFetchingConstructions
  }));

  const loadConstructions = () => {
    dispatch(fetchConstruction());
    Constructions.getConstructions().then((data) => {
      dispatch(setConstructions(data.data));
    }).catch((err) => {
      dispatch(fetchConstructionsError(err && err.data
      && err.data.message ? err.data.message : 'Error Loading Constructions'));
    });
  };

  useEffect(() => {
    loadConstructions();
  }, []);

  return (
    <>
      <Helmet>
        <title>Obras</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ConstructionListToolbar />
          <Box sx={{ pt: 3 }}>
            <ConstructionListResults constructions={constructions} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ConstructionList;
