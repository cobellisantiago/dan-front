import PropTypes from 'prop-types';
import {
  Box, Button,
  Card, SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import React, { useState } from 'react';
import { Trash as DeleteIcon, Plus as AddIcon } from 'react-feather';
import '../../index.css';

const OrdersTable = ({ orders, shipmentOrders, setShipmentOrders }) => {
  const deleteOrderClick = (o) => {
    const filteredOrders = shipmentOrders.filter((i) => i.id !== o.id);
    setShipmentOrders(filteredOrders);
    const row = document.getElementById(`row-${o.id}`);
    row.classList.remove('addedRow');
  };

  const addOrderClick = (o) => {
    setShipmentOrders([...shipmentOrders, o]);
    const row = document.getElementById(`row-${o.id}`);
    row.classList.add('addedRow');
  };

  return (
    <Card sx={{ marginY: 3 }}>
      <Box sx={{ maxHeight: 210, overflowY: 'auto' }}>
        <Table stickyHeader>
          <TableHead sx={{ background: 'gainsboro', fontWeight: 'bold' }}>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                CONSTRUCCION
              </TableCell>
              <TableCell>
                DETALLES
              </TableCell>
              <TableCell>
                ACCION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((o) => (
              <TableRow
                id={`row-${o.id}`}
                key={o.id}
              >
                <TableCell>
                  {o.id}
                </TableCell>
                <TableCell>
                  {o.constructionId}
                </TableCell>
                <TableCell>
                  {o.details.map((od) => `${od.productId} x${od.quantity} \t`)}
                </TableCell>
                <TableCell sx={{ maxWidth: 3 }}>
                  <Button>
                    {
                      shipmentOrders.includes(o) ? (
                        <SvgIcon
                          id="delete-icon"
                          fontSize="small"
                          color="action"
                          onClick={() => deleteOrderClick(o)}
                        >
                          <DeleteIcon />
                        </SvgIcon>
                      ) : (
                        <SvgIcon
                          id="add-icon"
                          fontSize="small"
                          color="action"
                          onClick={() => addOrderClick(o)}
                        >
                          <AddIcon />
                        </SvgIcon>
                      )
                    }
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrdersTable;
