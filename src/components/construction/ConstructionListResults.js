import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  Checkbox,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import { Trash as DeleteIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const ConstructionListResults = ({ constructions, ...rest }) => {
  const [selectedConstructionIds, setSelectedConstructionIds] = useState([]);
  const [constructionsList, setConstructionsList] = useState(constructions || []);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/app/construction/edit', { replace: true });
  };

  useEffect(() => {
    setConstructionsList(constructions);
  }, [constructions]);

  const handleSelectAll = (event) => {
    let newSelectedConstructionIds;

    if (event.target.checked) {
      newSelectedConstructionIds = constructionsList.map((construction) => construction.id);
    } else {
      newSelectedConstructionIds = [];
    }

    setSelectedConstructionIds(newSelectedConstructionIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedConstructionIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedConstructionIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedConstructionIds.slice(1));
    } else if (selectedIndex === selectedConstructionIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedConstructionIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedConstructionIds.slice(0, selectedIndex),
        selectedConstructionIds.slice(selectedIndex + 1)
      );
    }

    setSelectedConstructionIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead sx={{ background: 'gainsboro', fontWeight: 'bold' }}>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedConstructionIds.length === constructionsList.length}
                    color="primary"
                    indeterminate={
                      selectedConstructionIds.length > 0
                      && selectedConstructionIds.length < constructionsList.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
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
              {constructionsList.slice(0, limit).map((construction) => (
                <TableRow
                  hover
                  key={construction.id}
                  selected={selectedConstructionIds.indexOf(construction.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedConstructionIds.indexOf(construction.id) !== -1}
                      onChange={(event) => handleSelectOne(event, construction.id)}
                      value="true"
                    />
                  </TableCell>
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
                        {construction.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {construction.type.description}
                  </TableCell>
                  <TableCell>
                    {construction.address}
                  </TableCell>
                  <TableCell>
                    {construction.latitude}
                  </TableCell>
                  <TableCell>
                    {construction.longitude}
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
      <TablePagination
        labelRowsPerPage="Filas por Pagina"
        component="div"
        count={constructionsList.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ConstructionListResults.propTypes = {
  constructions: PropTypes.array.isRequired
};

export default ConstructionListResults;
