import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

const PaymentListResults = ({ payments }) => (
  <Card>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050 }}>
        <Table>
          <TableHead sx={{ background: 'gainsboro', fontWeight: 'bold' }}>
            <TableRow>
              <TableCell>
                CLIENTE
              </TableCell>
              <TableCell>
                FECHA
              </TableCell>
              <TableCell>
                METODO DE PAGO
              </TableCell>
              <TableCell>
                OBSERVACION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow
                hover
                key={payment.id}
              >
                <TableCell>
                  {payment.clientId}
                </TableCell>
                <TableCell>
                  {moment(payment.paymentDate).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  {payment.paymentMethod.type}
                </TableCell>
                <TableCell>
                  {payment.paymentMethod.observation || ''}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);

PaymentListResults.propTypes = {
  payments: PropTypes.array.isRequired
};

export default PaymentListResults;
