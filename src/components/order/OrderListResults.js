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

const OrderListResults = ({ customers, ...rest }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState(customers);

  const handleClick = () => {
    navigate('/app/material/edit', { replace: true });
  };

  const handleDeleteClick = (order) => {
    const filtered = orders.filter((i) => i.id !== order.id);
    setOrders(filtered);
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
                  CONSTRUCCION
                </TableCell>
                <TableCell>
                  FECHA DE ENVIO
                </TableCell>
                <TableCell>
                  ESTADO
                </TableCell>
                <TableCell>
                  ACCION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
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
                        {order.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {order.email}
                  </TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {order.address.country}
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
                      onClick={() => handleDeleteClick(order)}
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

OrderListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default OrderListResults;
