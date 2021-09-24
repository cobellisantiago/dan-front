import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography
} from '@material-ui/core';

const NotFound = () => (
  <>
    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <img
            alt="Under development"
            src="/static/images/undraw_page_not_found_su7k.svg"
            style={{
              marginBottom: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          La pagina que busca no se ha encontrado
        </Typography>
      </Container>
    </Box>
  </>
);

export default NotFound;
