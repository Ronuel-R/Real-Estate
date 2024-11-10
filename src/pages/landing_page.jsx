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
    import Grid from '@mui/material/Grid2';
    import PropTypes from 'prop-types';
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import AppBar from '@mui/material/AppBar';
    import {  Avatar, Button, IconButton, TextField, Typography,useMediaQuery,useTheme } from '@mui/material';
    import Autocomplete from '@mui/material/Autocomplete';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import BedIcon from '@mui/icons-material/Bed';
    import BathtubIcon from '@mui/icons-material/Bathtub';
    import Grid3x3Icon from '@mui/icons-material/Grid3x3';
    import houseImage from '../assets/house.jpg';
    import DeleteIcon from '@mui/icons-material/Delete';  
    import Dialog from '@mui/material/Dialog';
import DeleteListing from '../components/modals/delete_listing';
import CreateListing from '../components/modals/create_listing';


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
        comment: '“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”'
      },
      {
        id: 3,
        name: 'Jane Smith',
        position: 'designer',
        comment: '“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”'
      }
    ];
    const houseList =[
      {
        id: 1,
        name: 'Malto House',
        file: houseImage,
        rooms:3,
        bathroom:2,
        grid:2
      },
      {
        id: 2,
        name: 'Malto House',
        file: houseImage,
        rooms:4,
        bathroom:3,
        grid:3
      },
      {
        id: 3,
        name: 'Malto House',
        file: houseImage,
        rooms:1,
        bathroom:1,
        grid:2
      },
      {
        id: 4,
        name: 'Malto House',
        file: houseImage,
        rooms:5,
        bathroom:3,
        grid:4
      },
      {
        id: 5,
        name: 'Malto House',
        file: houseImage,
        rooms:1,
        bathroom:1,
        grid:1
      },
      {
        id: 6,
        name: 'Malto House',
        file: houseImage,
        rooms:2,
        bathroom:2,
        grid:2
      },
    ];

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
    const options = ["United States", "Canada", "Mexico", "Japan", "Australia"];
    function LandingPage() {
      const navigate = useNavigate();
      const [value, setValue] = useState(1);
      const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
      const displayedHouses = houseList
      // isMobile ? houseList.slice(0, 2) : houseList.slice(0, 6);
      const [openDeleteListing, setOpenDeleteListing] = useState(false);
      const [openCreateListing, setOpenCreateListing] = useState(false);
      const [selectedVal, setSelectedVal] = useState(0);

      const handleClickOpenDeleteListing = (id) => {
        setOpenDeleteListing(true);
        setSelectedVal(id)
      };

      const handleCloseDeleteListing = () => {
        setOpenDeleteListing(false);
      };
      const handleClickOpenCreateListing = () => {
        setOpenCreateListing(true);
      };

      const handleCloseCreateListing = () => {
        setOpenCreateListing(false);
      };

    const handleChange = (event, newValue) => {
      setValue(newValue);
      setSelectedVal(0)
    };
      return (
        <>
        <Dialog
            open={openDeleteListing}
            onClose={handleCloseDeleteListing}
            PaperProps={{
              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                handleCloseDeleteListing();
              },
            }}
          >
            <DeleteListing handleClose={handleCloseDeleteListing}/>
          </Dialog>
          <Dialog
            open={openCreateListing}
            onClose={handleCloseCreateListing}
            PaperProps={{
              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                handleCloseCreateListing();
              },
            }}
          >
            <CreateListing handleClose={handleCloseCreateListing}/>
          </Dialog>
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
          <Box className='box-container-3'>
              <Box className='box-container-3-body'>
                  <a className="text-body-3" onClick={() => navigate("/")}>Find your next place to live</a>
              </Box>
              <Box className='box-container-3-search'>
                  <Grid container row>
                    <Grid item>
                    <Autocomplete
                    options={options} 
                    filterOptions={(options) => options} 
                      sx={{ width: isMobile ? 100 : 200 }}
                      renderInput={(text) => <TextField className='searchfield-1 search' {...text} label="Looking for" />}
                    />
                    </Grid>
                    <Grid item>
                    <Autocomplete
                    options={options} 
                    filterOptions={(options) => options} 
                      disablePortal
                      sx={{ width: isMobile ? 100 : 200 }}
                      renderInput={(text) => <TextField className='searchfield-2 search' {...text} label="Location" />}
                    />
                    </Grid>
                    <Grid item>
                      <Autocomplete
                      options={options} 
                      filterOptions={(options) => options} 
                        disablePortal
                        sx={{ width: isMobile ? 100 : 200 }}
                        renderInput={(text) => <TextField className='searchfield-3 search' {...text} label="Property" />}
                      />
                    </Grid>
                    <Grid item>
                    <Autocomplete
                    options={options} 
                    filterOptions={(options) => options} 
                      disablePortal
                      sx={{ width: isMobile ? 100 : 200 }}
                      renderInput={(text) => <TextField className='searchfield-4 search' {...text} label="Price " />}
                    />
                    </Grid>
                    {/* <Grid item>
                      <Button
                      onClick={handleClickOpenCreateListing}
                          variant="contained"
                          color="primary"
                          sx={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '700',
                            fontSize: '16px',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            backgroundColor:'orange',
                            ml:20
                          }}
                        >
                          Add New Listing
                        </Button>
                    </Grid> */}
                  </Grid>
                  <Box className='box-container-3-body-card'>
                    <Grid container row spacing={2}>
                      {displayedHouses.map((house)=>(
                        <Grid item size={{ xs: 6, md: 4 }} key={house.id} >
                            <Card className='container-3-card' onClick={() => navigate(`/product/${house.id}`)} sx={{ position: 'relative' }}>
                              {/* <IconButton
                                sx={{
                                  position: 'absolute',
                                  top: 8,
                                  right: 8,
                                  color: 'red',
                                  zIndex: 1,
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClickOpenDeleteListing(house.id)
                                }}
                              >
                                <DeleteIcon />
                              </IconButton> */}
                              <CardMedia
                                sx={{ height: 140 }}
                                image={house.file}
                                title="house"
                              />
                              <CardContent>
                                <Typography className='card-name' gutterBottom variant="h5" component="div">
                                  {house.name}
                                </Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                              <Box sx={{width:'100%',alignItems: 'center', padding: 1, border: '1px solid rgba(128, 128, 128, 0.5)' }}>
                                  <Typography variant="body2"><BedIcon sx={{ marginRight: 1,color:'black',verticalAlign: 'middle' }} />{house.rooms}</Typography> 
                                </Box>
                                
                                <Box sx={{width:'100%',alignItems: 'center', padding: 1,border: '1px solid rgba(128, 128, 128, 0.5)' }}>
                                  <Typography variant="body2"><BathtubIcon sx={{ marginRight: 1,color:'black',verticalAlign: 'middle' }}  />{house.bathroom}</Typography>
                                </Box>
                                
                                <Box sx={{width:'100%',alignItems: 'center', padding: 1,border: '1px solid rgba(128, 128, 128, 0.5)' }}>
                                  <Typography variant="body2"><Grid3x3Icon sx={{ marginRight: 1,color:'black',verticalAlign: 'middle' }}/>{house.grid}</Typography>
                                </Box>
                              </CardActions>
                            </Card>
                    </Grid>
                      ))}
                  </Grid>
                  </Box>  
              </Box>

          </Box>
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
