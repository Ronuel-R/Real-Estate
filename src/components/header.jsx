/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../css/header.css'
import Box from '@mui/material/Box';
import '@fontsource/dm-sans/400.css';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useMediaQuery, useTheme} from '@mui/material';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  return (
    <>
          <Box className='header'>
            {isMobile ? 
            <>
            {/* App Bar */}
                <AppBar  sx={{ backgroundColor: '#333' }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
                        LogoIpsum
                    </Typography>
                    <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    </Toolbar>
                </AppBar>

                {/* Drawer */}
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    >
                    <List>
                        <ListItem button onClick={() => navigate("/")}>
                        <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button onClick={() => navigate("/")}>
                        <ListItemText primary="Nav Link 1" />
                        </ListItem>
                        <ListItem button onClick={() => navigate("/")}>
                        <ListItemText primary="Nav Link 2" />
                        </ListItem>
                        <ListItem button onClick={() => navigate("/")}>
                        <ListItemText primary="Nav Link 3" />
                        </ListItem>
                        <ListItem
                        button
                        sx={{
                            backgroundColor: 'orange',
                            borderRadius: '8px',
                            color: 'white',
                            textAlign: 'center',
                            mt: 2,
                        }}
                        onClick={() => navigate("/")}
                        >
                        <Typography variant="button" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Work with us
                            <ArrowRightAltIcon sx={{ marginLeft: 1, verticalAlign: 'middle' }} />
                        </Typography>
                        </ListItem>
                    </List>
                    </Box>
                </Drawer>
            </>: <Grid container row spacing={2}>
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
            </Grid>}
            
          </Box>
      </>
  )
}

export default Header
