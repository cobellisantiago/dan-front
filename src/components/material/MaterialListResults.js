import PropTypes from 'prop-types';
import moment from 'moment';
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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MaterialListResults = ({ customers, ...rest }) => {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState(customers);

  const handleClick = () => {
    navigate('/app/material/edit', { replace: true });
  };

  const handleDeleteClick = (material) => {
    const filtered = materials.filter((i) => i.id !== material.id);
    setMaterials(filtered);
  };

  return (
    <Card {...rest}>
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
              {materials.map((m) => (
                <TableRow
                  hover
                  key={m.id}
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
                        {m.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {m.email}
                  </TableCell>
                  <TableCell>
                    {m.address.country}
                  </TableCell>
                  <TableCell>
                    {m.phone}
                  </TableCell>
                  <TableCell>
                    {m.phone}
                  </TableCell>
                  <TableCell>
                    {moment(m.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={handleClick}
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(m)}
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

MaterialListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default MaterialListResults;
