import NewConstruction from 'src/components/construction/NewConstruction';
import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';

const AddConstruction = () => (
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
      <NewConstruction />
    </Box>
  </>
);

export default AddConstruction;
