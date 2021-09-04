import EmployeeNewConstruction from 'src/components/construction/EmployeeNewConstruction';
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
      <EmployeeNewConstruction />
    </Box>
  </>
);

export default AddConstruction;
