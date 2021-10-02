import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import MaterialListResults from 'src/components/material/MaterialListResults';
import MaterialListToolbar from 'src/components/material/MaterialListToolbar';
import { Products } from '../../services';

const MaterialList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadProducts = () => {
    Products.getProducts().then((data) => setProducts(data.data || []))
    .catch((err) => {});
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Materiales</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <MaterialListToolbar
            loadProducts={loadProducts}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          <Box sx={{ pt: 3 }}>
            <MaterialListResults
              products={products}
              setSelectedProduct={setSelectedProduct}
              loadProducts={loadProducts}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MaterialList;
