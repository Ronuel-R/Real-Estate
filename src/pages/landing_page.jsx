/* eslint-disable no-unused-vars */
  import { useState } from 'react'
  import '../css/landing_page.css'
  import Container from '@mui/material/Container';
  import Box from '@mui/material/Box';
  import '@fontsource/dm-sans/400.css';
  import { useNavigate } from "react-router-dom";
  import Header from '../components/header';
  import Footer from '../components/footer';
  import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

  function LandingPage() {
    const navigate = useNavigate();
    return (
      <>
          <Container className='container-body' maxWidth>
          <Box className='box-container-1'>
            <Header/>
            <Box className='box-container-1-body'>
                <a className="text-body" onClick={() => navigate("/")}>Beautiful homes made for you</a>
            </Box>
            <Box className='box-container-1-text'>
                <a className="text-content" onClick={() => navigate("/")}>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</a>
            </Box>
            <Box className='see-all-listing'>
                <a className="see-all-listing-text" onClick={() => navigate("/")}>See All Listing</a>
            </Box>
          </Box>
        <Box className='box-container-2'>
          <Box className='box-image'/>
          <Box className='box-container-2-body'>
                  <a className="text-body-2" onClick={() => navigate("/")}>You’re in good hands</a>
                  <br />
                  <a className="text-content-2" onClick={() => navigate("/")}>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</a>
                  <br/>
                  <Box className='box-container-2-background'>
                  <a className="body-2-button" onClick={() => navigate("/")}>Learn more<ArrowRightAltIcon sx={{ marginLeft: 1,color:'orange',verticalAlign: 'middle' }} /></a>
                  </Box>
            </Box>
        </Box>
        <Box className='box-container-3'></Box>
        <Box className='box-container-4'>
        
          <Box className='box-container-4-body'>
                  <a className="text-body-4" onClick={() => navigate("/")}>You’re in good hands</a>
                  <br />
                  <a className="text-content-4" onClick={() => navigate("/")}>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</a>
                  <br/>
                  <Box className='box-container-4-background'>
                  <a className="body-4-button" onClick={() => navigate("/")}>Learn more<ArrowRightAltIcon sx={{ marginLeft: 1,color:'orange',verticalAlign: 'middle' }} /></a>
                  </Box>
            </Box>
            <Box className='box-image-4'/>
        </Box>
        <Box className='box-container-5'>
        <Box className='box-container-5-body'>
                  <a className="text-body-5" onClick={() => navigate("/")}>You’re in good hands</a>
                  <br />
                  <a className="text-content-5" onClick={() => navigate("/")}>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</a>
                  <br/>
                  <Box className='box-container-5-background'>
                  <a className="body-5-button" onClick={() => navigate("/")}>Learn more<ArrowRightAltIcon sx={{ marginLeft: 1,color:'white',verticalAlign: 'middle' }} /></a>
                  </Box>
            </Box>
        </Box>
        <Box className='box-container-6 '></Box>
        <Footer/>
        </Container>
        </>
    )
  }

  export default LandingPage
