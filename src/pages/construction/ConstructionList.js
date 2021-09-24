import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ConstructionListResults from 'src/components/construction/ConstructionListResults';
import ConstructionListToolbar from 'src/components/construction/ConstructionListToolbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import {
  clear,
  fetchConstruction,
  fetchConstructionError,
  fetchConstructions,
  fetchConstructionsError,
  setConstruction,
  setConstructions
} from '../store/constructions/actions';
import { Constructions } from '../services';

const mapStateToProps = (state) => ({
  construction: state.constructions.construction,
  fetchingConstruction: state.constructions.fetchingConstruction,
  errorFetchingConstruction: state.constructions.errorFetchingConstruction,
  constructions: state.constructions.constructions,
  fetchingConstructions: state.constructions.fetchingConstructions,
  errorFetchingConstructions: state.constructions.errorFetchingConstructions
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchConstruction,
  fetchConstructions,
  fetchConstructionError,
  fetchConstructionsError,
  setConstruction,
  setConstructions,
  clear
}, dispatch);

const ConstructionList = ({
    constructions
  }) => {
  // eslint-disable-next-line no-unused-vars
  const loadConstructions = () => {
    fetchConstruction();
    Constructions.getConstructions().then((data) => {
      console.log(data);
      setConstructions(data.body);
    }).catch((err) => {
      fetchConstructionsError(err && err.data
      && err.data.message ? err.data.message : 'Error Loading Constructions');
    });
  };

  useEffect(() => {
    loadConstructions();
  });

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
            <ConstructionListResults customers={constructions} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConstructionList);
