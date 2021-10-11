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

const ShipmentListResults = ({ shipments, ...rest }) => {
  const navigate = useNavigate();
  // const [shipments, setShipments] = useState(customers);

  const handleClick = () => {
    navigate('/app/shipment/edit', { replace: true });
  };

  // const handleDeleteClick = (shipment) => {
  //   const filtered = shipments.filter((i) => i.id !== shipment.id);
  //   setShipments(filtered);
  // };

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
                  DIRECCION DESTINO
                </TableCell>
                <TableCell>
                  FECHA DE ENVIO
                </TableCell>
                <TableCell>
                  COSTO
                </TableCell>
                <TableCell>
                  ACCION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shipments.map((shipment) => (
                <TableRow
                  hover
                  key={shipment.id}
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
                        {shipment.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {shipment.destinationAddress}
                  </TableCell>
                  <TableCell>
                    {moment(shipment.date).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {shipment.cost}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={handleClick}
                    >
                      Editar
                    </Button>
                    <Button>
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

ShipmentListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default ShipmentListResults;
