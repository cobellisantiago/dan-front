import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import AddMaterial from 'src/pages/material/AddMaterial';

const MaterialListToolbar = ({ loadProducts, selectedProduct, setSelectedProduct }) => {
  const [showAddNewProduct, setShowAddNewProduct] = useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ maxWidth: '50', alignSelf: 'start' }}>
          <Card sx={{ paddingBottom: 0, display: 'flex' }}>
            <CardContent sx={{ width: 400 }}>
              <Box>
                <TextField
                  fullWidth
                  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                  placeholder="Buscar material"
                  variant="outlined"
                />
              </Box>
            </CardContent>
            <Button
              variant="contained"
              sx={{ height: 40, alignSelf: 'center', marginRight: 2 }}
            >
              Buscar
            </Button>
          </Card>
        </Box>
        <Box sx={{ alignSelf: 'center' }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setShowAddNewProduct(true)}
          >
            Agregar material
          </Button>
        </Box>
      </Box>

      {(showAddNewProduct || selectedProduct) && (
        <AddMaterial
          loadProducts={loadProducts}
          setShowAddNewProduct={setShowAddNewProduct}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </>
  );
};

export default MaterialListToolbar;
