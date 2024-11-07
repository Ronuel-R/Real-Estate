/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../css/footer.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '@fontsource/dm-sans/400.css';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import { Divider, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  const navigate = useNavigate();
  return (
    <>
        <Container className='footer-body' maxWidth>
        <Box className='footer-container-1'>
          <Grid container direction={'column'} spacing={2}>
                <Grid size={12}>
                  <Grid container spacing={12}>
                      <Grid className='footer-list-top' size={6}>
                        <span>
                          <Typography className="footer-nav-top">Make your dreams a</Typography>
                          <Typography className="footer-nav-top footer-nav-text-color"> Reality</Typography>
                        </span>
                      </Grid>
                        <Grid className='footer-list-top' size={6}>
                          <Typography className="footer-nav-list-background">Work with us<ArrowRightAltIcon sx={{ marginLeft: 1,color:'white' }} /></Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'white', width: '80%', opacity: 0.2, margin: '0 auto' }} />
                <Grid size={12}>
                  <Grid container spacing={2}>
                      <Grid className='footer-list-bottom' size={4.5}>
                        <Stack>
                          <Typography className="footer-nav-logo">LogoIpsum</Typography>
                          <Stack direction={'row'} spacing={2} sx={{pl:'27%',pt:'5%'}}>
                            <FacebookIcon sx={{color:'white'}}/>
                            <TwitterIcon sx={{color:'white'}}/>
                            <InstagramIcon sx={{color:'white'}}/>
                          </Stack>
                          </Stack>
                      </Grid>
                        <Grid className='footer-list-bottom' size={2.5}>
                          <Typography className="footer-nav-list-bottom">Column Heading</Typography>
                          <Stack spacing={2}>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          </Stack>
                        </Grid>
                        <Grid className='footer-list-bottom' size={2.5}>
                          <Typography className="footer-nav-list-bottom">Column Heading</Typography>
                          <Stack spacing={2}>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          </Stack>
                        </Grid>
                        <Grid className='footer-list-bottom' size={2.5  }>  
                          <Typography className="footer-nav-list-bottom">Column Heading</Typography>
                          <Stack spacing={2}>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          <Typography className="footer-nav-list-bottom-options">Link goes here</Typography>
                          </Stack>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </Box>
      </Container>
      </>
  )
}

export default Footer
