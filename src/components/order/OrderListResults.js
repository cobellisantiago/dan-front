import React from 'react';
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

const OrderListResults = ({ orders, setSelectedOrder }) => (
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
                      {order.id}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {order.construction?.id}
                </TableCell>
                <TableCell>
                  {moment(order.orderDate).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  {order.state}
                </TableCell>
                <TableCell>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => setSelectedOrder(order)}
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

OrderListResults.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderListResults;
