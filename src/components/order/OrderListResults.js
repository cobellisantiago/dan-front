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
                PRODUCTOS
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
                  {order.construction?.description}
                </TableCell>
                <TableCell>
                  {moment(order.orderDate).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  {(order.details || []).map((detail) => detail.product?.name).join(', ')}
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
