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
import React from 'react';
import { Trash as DeleteIcon } from 'react-feather';

const OrderDetailsTable = ({ orderDetails }) => (
  <Card sx={{ margin: 3 }}>
    <Box sx={{ minWidth: 942 }}>
      <Table>
        <TableHead sx={{ background: 'gainsboro', fontWeight: 'bold' }}>
          <TableRow>
            <TableCell>
              PRODUCTO
            </TableCell>
            <TableCell>
              CANTIDAD
            </TableCell>
            <TableCell>
              PRECIO
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {orderDetails.map((od) => (
            <TableRow
              hover
              key={od.id}
            >
              <TableCell>
                {od.product}
              </TableCell>
              <TableCell>
                {od.quantity}
              </TableCell>
              <TableCell>
                $
                {od.price}
              </TableCell>
              <TableCell sx={{ maxWidth: 3 }}>
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
  </Card>
);

OrderDetailsTable.propTypes = {
  orderDetails: PropTypes.array.isRequired
};

export default OrderDetailsTable;
