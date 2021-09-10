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

const ConstructionListResults = ({ customers, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/app/construction/edit', { replace: true });
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
                  TIPO
                </TableCell>
                <TableCell>
                  DIRECCION
                </TableCell>
                <TableCell>
                  LATITUD
                </TableCell>
                <TableCell>
                  LONGITUD
                </TableCell>
                <TableCell>
                  ACCION
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
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {customer.address.country}
                  </TableCell>
                  <TableCell>
                    {customer.phone}
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
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

ConstructionListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default ConstructionListResults;
