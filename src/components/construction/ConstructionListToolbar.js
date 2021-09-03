import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const ConstructionListToolbar = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/app/construction/add', { replace: true });
  }

  return (
    <Box {...props} sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ maxWidth: '50', alignSelf: 'start' }}>
        <Card sx={{ paddingBottom: 0, display: 'flex' }}>
          <CardContent sx={{ width: 400 }}>
            <Box>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Buscar obra"
                variant="outlined"
              />
            </Box>
          </CardContent>
          <Button
            variant="contained"
            sx={{ height: 40, alignSelf: 'center', marginRight: 2 }}
          >
            Buscar
          </Button>
        </Card>
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Agregar obra
        </Button>
      </Box>
    </Box>
  );
};

export default ConstructionListToolbar;
