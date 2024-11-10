/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Autocomplete, Button, Chip, InputAdornment, TextField, IconButton } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function CreateListing({ handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password });
    handleClose(); // Close the dialog after submit
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <>
      <DialogTitle>Admin Login</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
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
                value={password}
                onChange={handlePasswordChange}
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
            <Button onClick={handleClose} sx={{ color: 'red' }}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#1976d2' }}>
              Login
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </>
  );
}