import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ConstructionListResults from 'src/components/construction/ConstructionListResults';
import ConstructionListToolbar from 'src/components/construction/ConstructionListToolbar';

import { Constructions } from '../../services';

const ConstructionList = () => {
  const [selectedConstruction, setSelectedConstruction] = useState(null);
  const [constructions, setConstructions] = useState([]);
  const [constructionIdSearched, setConstructionIdSearched] = useState();

  const loadConstructions = () => {
    Constructions.getConstructions().then((data) => {
     setConstructions(data.data);
    }).catch((err) => {
      console.log(err?.data?.message
        ? err.data.message : 'Error Loading Constructions');
    });
  };

  const searchConstructionById = () => {
    if (constructionIdSearched) {
      Constructions.getConstructionById(constructionIdSearched).then((data) => {
        setConstructions([data.data]);
      }).catch((err) => {
        console.log(err && err.data
        && err.data.message ? err.data.message : 'Error Loading Constructions');
      });
    }
  };

  useEffect(() => {
    loadConstructions();
  }, []);

  useEffect(() => {
    if (!constructionIdSearched) loadConstructions();
  }, [constructionIdSearched]);

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
          <ConstructionListToolbar
            loadConstructions={loadConstructions}
            selectedConstruction={selectedConstruction}
            setSelectedConstruction={setSelectedConstruction}
            searchConstruction={searchConstructionById}
            setConstructionIdSearched={setConstructionIdSearched}
          />
          <Box sx={{ pt: 3 }}>
            <ConstructionListResults
              constructions={constructions}
              loadConstructions={loadConstructions}
              setSelectedConstruction={setSelectedConstruction}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ConstructionList;
