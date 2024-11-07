/* eslint-disable react/prop-types */
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

  import PropTypes from 'prop-types';
  import Tabs from '@mui/material/Tabs';
  import Tab from '@mui/material/Tab';
  import AppBar from '@mui/material/AppBar';
  import {  Avatar, Typography,useMediaQuery,useTheme } from '@mui/material';

  const users = [
    {
      id: 1,
      name: 'Lara Madrigal',
      position: 'client',
      comment: '“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”'
    },
    {
      id: 2,
      name: 'John Doe',
      position: 'developer',
      comment: 'test'
    },
    {
      id: 3,
      name: 'Jane Smith',
      position: 'designer',
      comment: '“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”'
    }
  ];

  // eslint-disable-next-line react/prop-types
  function CustomTabLabel({user,value}) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ marginRight: 1 }} src="path_to_image_or_url" />
        <Box>
          <Typography variant="body1" sx={{ backgroundColor: value === user.id ? 'black' : 'transparent',color: value === user.id  ? 'white' : 'black',}}>{user.name}</Typography> 
          <Typography variant="body2" sx={{ backgroundColor: value === user.id ? 'black' : 'transparent',color: 'grey', textAlign:'left'}}>{user.position}</Typography>
        </Box>
      </Box>
    );
  }

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box className="customtabpanel" >{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  function LandingPage() {
    const navigate = useNavigate();
    const [value, setValue] = useState(1);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                <a className="see-all-listing-text" onClick={() => navigate("/")}>See All Listing <ArrowRightAltIcon sx={{ marginLeft: 1,color:'orange',verticalAlign: 'middle' }} /></a>
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
        <Box className='box-container-6'>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderColor: 'divider'}}>
      {users.map((user)=>(
        user.id === value ? (
          <CustomTabPanel key={user.id}>
           {user.comment}
          </CustomTabPanel>
        ) : null
      ))}
        
        <AppBar className="container-5-appbar" position="static" >
          <Tabs value={value} onChange={handleChange} orientation={isMobile ? 'vertical' : 'horizontal'} > 
            {users.map((user)=>(
              <Tab key={user.id} label={<CustomTabLabel user={user} value={value}/>} value={user.id} {...a11yProps(user.id)} sx={{ flexGrow: 1,textAlign:'left', backgroundColor: value === user.id ? 'black' : 'transparent',color: value === user.id  ? 'white' : 'inherit', display:'block !important'}} />
            ))}
          </Tabs>
        </AppBar>
      </Box>
      
    </Box>
        </Box>
        <Footer/>
        </Container>
        </>
    )
  }

  export default LandingPage
