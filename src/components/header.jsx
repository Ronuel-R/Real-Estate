/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../css/header.css'
import Box from '@mui/material/Box';
import '@fontsource/dm-sans/400.css';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Header() {
  const navigate = useNavigate();
  return (
    <>
          <Box className='header'>
            <Grid container row spacing={2}>
                <Grid className='nav-list-logo' size={4}>
                    <a className="header-nav" onClick={() => navigate("/")}>LogoIpsum</a>
                </Grid>
                <Grid className='nav-list' size={1.5}>
                    <a className="header-nav" onClick={() => navigate("/")}>Nav Link</a>
                </Grid>
                <Grid className='nav-list' size={1.5}>
                    <a className="header-nav" onClick={() => navigate("/")}>Nav Link</a>
                </Grid>
                <Grid className='nav-list' size={1.5}>
                    <a className="header-nav" onClick={() => navigate("/")}>Nav Link</a>
                </Grid>
                <Grid className='nav-list' size={1.5}>
                    <a className="header-nav" onClick={() => navigate("/")}>Nav Link</a>
                </Grid>
                <Grid className='nav-list nav-list-background' sx={{ backgroundColor: 'orange', textAlign: 'center', height: '50px',borderTopRightRadius:'20px' }} size={2}>
                    <a className="header-nav header-button" onClick={() => navigate("/")}>Work with us<ArrowRightAltIcon sx={{ marginLeft: 1,color:'white',verticalAlign: 'middle' }} /></a>
                </Grid>
            </Grid>
          </Box>
      </>
  )
}

export default Header
