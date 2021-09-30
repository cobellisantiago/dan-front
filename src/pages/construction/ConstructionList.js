import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ConstructionListResults from 'src/components/construction/ConstructionListResults';
import ConstructionListToolbar from 'src/components/construction/ConstructionListToolbar';
import customers from 'src/__mocks__/customers';

const ConstructionList = () => (
  <>
    <Helmet>
      <title>Obras</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ConstructionListToolbar />
        <Box sx={{ pt: 3 }}>
          <ConstructionListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default ConstructionList;
