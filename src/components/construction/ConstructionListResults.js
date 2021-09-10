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

const ConstructionListResults = ({ customers, ...rest }) => {
  const navigate = useNavigate();
  const [constructions, setConstructions] = useState(customers);

  const handleClick = () => {
    navigate('/app/construction/edit', { replace: true });
  };

  const handleDeleteClick = (construction) => {
    const filtered = constructions.filter((i) => i.id !== construction.id);
    setConstructions(filtered);
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
              {constructions.map((construction) => (
                <TableRow
                  hover
                  key={construction.id}
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
                        {construction.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {construction.email}
                  </TableCell>
                  <TableCell>
                    {construction.address.country}
                  </TableCell>
                  <TableCell>
                    {construction.phone}
                  </TableCell>
                  <TableCell>
                    {moment(construction.createdAt).format('DD/MM/YYYY')}
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
                      onClick={() => handleDeleteClick(construction)}
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

ConstructionListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default ConstructionListResults;
