import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import MaterialListResults from 'src/components/material/MaterialListResults';
import MaterialListToolbar from 'src/components/material/MaterialListToolbar';
import customers from 'src/__mocks__/customers';

const MaterialList = () => (
  <>
    <Helmet>
      <title>Materiales</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <MaterialListToolbar />
        <Box sx={{ pt: 3 }}>
          <MaterialListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default MaterialList;
