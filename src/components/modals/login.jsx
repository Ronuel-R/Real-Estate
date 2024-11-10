/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, InputAdornment, TextField, IconButton } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function AdminLogin({ loginInfo,setLoginInfo,Submit }) {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <DialogTitle>Admin Login</DialogTitle>
      <DialogContent>
        <form onSubmit={Submit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={loginInfo.email}
                onChange={(e) => setLoginInfo({ ...loginInfo  , email: e.target.value })}
                sx={{ width: '100%' }}
                required
                type="email"
                helperText="Please enter a valid email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                value={loginInfo.password}
                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                sx={{ width: '100%' }}
                required
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handlePasswordToggle}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <DialogActions sx={{ marginTop: 2 }}>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#1976d2' }}>
              Login
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </>
  );
}