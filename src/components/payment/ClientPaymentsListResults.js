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
  TableRow,
  Typography
} from '@material-ui/core';

const PaymentListResults = ({ customers, ...rest }) => (
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
                FECHA
              </TableCell>
              <TableCell>
                METODO
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                hover
                key={customer.id}
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
                      {customer.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {moment(customer.createdAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  {customer.address.country}
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
  customers: PropTypes.array.isRequired
};

export default PaymentListResults;
