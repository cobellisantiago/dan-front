import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import EmployeeNewMaterial from '../components/material/EmployeeNewMaterial';

const AddMaterial = () => (
  <>
    <Helmet>
      <title>Material</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <EmployeeNewMaterial />
    </Box>
  </>
);

export default AddMaterial;
