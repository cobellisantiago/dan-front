import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import { Trash as DeleteIcon } from 'react-feather';
import { Products } from '../../services';

const MaterialListResults = ({ products, setSelectedProduct, loadProducts }) => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    setMaterials(products);
  }, [products]);

  const handleDeleteClick = (material) => {
    Products.deleteProduct(material.id)
      .then(() => loadProducts())
      .catch((err) => {});
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead sx={{ background: 'gainsboro', fontWeight: 'bold' }}>
              <TableRow>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  NOMBRE
                </TableCell>
                <TableCell>
                  DESCRIPCION
                </TableCell>
                <TableCell>
                  PRECIO
                </TableCell>
                <TableCell>
                  STOCK ACTUAL
                </TableCell>
                <TableCell>
                  STOCK MINIMO
                </TableCell>
                <TableCell>
                  ACCION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {materials.map((material) => (
                <TableRow
                  hover
                  key={material.id}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {material.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {material.name}
                  </TableCell>
                  <TableCell>
                    {material.description}
                  </TableCell>
                  <TableCell>
                    {material.price}
                  </TableCell>
                  <TableCell>
                    {material.actualStock}
                  </TableCell>
                  <TableCell>
                    {material.minimumStock}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => setSelectedProduct(material)}
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(material)}
                    >
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <DeleteIcon />
                      </SvgIcon>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

MaterialListResults.defaultProps = {
  products: []
};

MaterialListResults.propTypes = {
  products: PropTypes.array
};

export default MaterialListResults;
