    /* eslint-disable react/prop-types */
    /* eslint-disable no-unused-vars */
    import { useEffect, useState } from 'react'
    import '../css/admin_dashboard.css'
    import Container from '@mui/material/Container';
    import Box from '@mui/material/Box';
    import '@fontsource/dm-sans/400.css';
    import Header from '../components/header';
    import Footer from '../components/footer';
    import "react-responsive-carousel/lib/styles/carousel.min.css";
    import Grid from '@mui/material/Grid2';
    import { Button, CardActions, Chip, Dialog, Divider, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
    import BedIcon from '@mui/icons-material/Bed';
    import BathtubIcon from '@mui/icons-material/Bathtub';
    import Grid3x3Icon from '@mui/icons-material/Grid3x3';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import { Card, CardContent, CardMedia } from '@mui/material';
    import { useNavigate } from "react-router-dom";
    import DeleteIcon from '@mui/icons-material/Delete';  
    import DeleteListing from '../components/modals/delete_listing';
    import CreateListing from '../components/modals/create_listing';
    import AdminLogin from '../components/modals/login';
    import axios from '../components/axios/axios';
    import EditIcon from '@mui/icons-material/Edit';
import UpdateListing from '../components/modals/update_listing';
import { useMediaQuery, useTheme} from '@mui/material';

  function AdminPage() {
    const navigate = useNavigate();
    const [openDeleteListing, setOpenDeleteListing] = useState(false);
    const [openCreateListing, setOpenCreateListing] = useState(false);
    const [openUpdateListing, setOpenUpdateListing] = useState(false);
    const [openAdminLogin, setOpenAdminLogin] = useState(true);
    const [propertyInfo, setPropertyInfo] = useState({})
    const [propertyInfoUpdate, setPropertyInfoUpdate] = useState({})
    const [selectedVal, setSelectedVal] = useState(0);
    const [propertyList, setPropertyList] = useState([]);
    const [loginInfo, setLoginInfo] = useState({email:'',password:''});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleCloseAdminLogin = () => {
      setOpenAdminLogin(false);
    };

    const handleClickOpenUpdateListing = (uid) => {
      setOpenUpdateListing(true);
      setSelectedVal(uid)
    };

    const handleCloseUpdateListing = () => {
      setOpenUpdateListing(false);
    };

    const handleClickOpenDeleteListing = (uid) => {
      setOpenDeleteListing(true);
      setSelectedVal(uid)
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
    const fetch = async () => {
      try {
        const response = await axios.get(
          "/real_estate/property_list/",
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setPropertyList(response.data.data)
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    useEffect(() => {
      if (localStorage.getItem("api-secret-key")){
        handleCloseAdminLogin();
      }
      fetch();
    }, []);

    return (
      <>
      <Dialog
            open={openDeleteListing}
            onClose={handleCloseDeleteListing}
          >
            <DeleteListing handleClose={handleCloseDeleteListing}
            Submit={(event) => {
              event.preventDefault();
              const deleteProperty = async () => {
                try {
                  const api_secret_key = localStorage.getItem("api-secret-key");
                  const authorization = localStorage.getItem("authorization");
                  const response = await axios.post(
                    `/real_estate/delete/${selectedVal}`,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                        "API-SECRET-KEY": api_secret_key,
                        "AUTHORIZATION": authorization,
                      },
                    }
                  );
                  if (response.data.message == 'Success'){
                    // put toast here
                    console.log('success')
                    fetch();

                    handleCloseDeleteListing();
                  }
                } catch (error) {
                  console.error("Error fetching property:", error);
                }
              };
              deleteProperty();
            }}
            />
          </Dialog>
          <Dialog
            open={openCreateListing}
            onClose={handleCloseCreateListing}
          >
            <CreateListing handleClose={handleCloseCreateListing}
            propertyInfo ={propertyInfo}
            setPropertyInfo={setPropertyInfo}
            Submit={(event) => {
              event.preventDefault();
              const create = async () => {
                try {
                  const api_secret_key = localStorage.getItem("api-secret-key");
                  const authorization = localStorage.getItem("authorization");
                  const response = await axios.post(
                    "/real_estate/create/",
                    propertyInfo,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                        "API-SECRET-KEY": api_secret_key,
                        "AUTHORIZATION": authorization,
                      },
                    }
                  );
                  if (response.data.message == 'Success'){
                    // put toast here
                    console.log('success')
                    fetch();

                    handleCloseCreateListing();
                  }
                } catch (error) {
                  console.error("Error fetching property:", error);
                }
              };
              create();
            }}
            />
          </Dialog>
            <Dialog
              open={openUpdateListing}
              onClose={handleCloseUpdateListing}
            >
              <UpdateListing handleClose={handleCloseUpdateListing}
              selectedVal = {selectedVal}
              propertyInfoUpdate ={propertyInfoUpdate}
              setPropertyInfoUpdate={setPropertyInfoUpdate}
              Submit={(event) => {
                event.preventDefault();
                

                const update = async () => {
                  try {
                    const api_secret_key = localStorage.getItem("api-secret-key");
                    const authorization = localStorage.getItem("authorization");
                    const response = await axios.post(
                      `/real_estate/update/${selectedVal}`,
                      propertyInfoUpdate,
                      {
                        headers: {
                          "Content-Type": "multipart/form-data",
                          "API-SECRET-KEY": api_secret_key,
                          "AUTHORIZATION": authorization,
                        },
                      }
                    );
                    if (response.data.message == 'Success'){
                      // put toast here
                      console.log('success')
                      fetch();
                      handleCloseUpdateListing();

                    }
                  } catch (error) {
                    if (error.response.data.code =='token_not_valid'){
                      localStorage.clear()
                      window.location.reload();
                    }
                    console.error("Error fetching property:", error);
                  }
                };
                update();
                
              }}
              />
            </Dialog>
          <Dialog
            open={openAdminLogin} 
          >
            <AdminLogin
            loginInfo={loginInfo} 
            setLoginInfo={setLoginInfo}
            Submit={(event) => {
              event.preventDefault();
              const login = async () => {
                try {
                  const response = await axios.post(
                    "/real_estate/login/",
                    loginInfo,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  );
                  if (response.data.message == 'Success'){
                    localStorage.setItem("api-secret-key", response.data.api_secret);
                    localStorage.setItem("authorization", 'Bearer ' + response.data.access_token);
                    handleCloseAdminLogin();
                  }
                } catch (error) {
                  console.error("Error fetching property:", error);
                }
              };
              login();
            }}
            />
          </Dialog>
          <Container className='admin-container-body' maxWidth>
            <Box className='admin-container-1'>
                <Header/>
                <Divider sx={{ borderColor: '#FFFFFF', width: '100%',opacity:'0.1', margin: '0 auto',mt:'2%' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%',padding:2 }}>

                  <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    backgroundColor: 'white', 
                    padding:isMobile? 1:3, 
                    borderRadius: 2, 
                    width: '45%', 
                    color: 'black',
                    mt:isMobile? 5:0
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: isMobile? '10px':'24px' }}>
                    Total Properties
                  </Typography>
                  <Typography variant="h4" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', marginTop: 1 }}>
                    {propertyList && propertyList.length > 0 ? propertyList[0].total_property : 'Loading...'}
                  </Typography>
                </Box>
                <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    backgroundColor: 'white', 
                    padding: isMobile? 1:3, 
                    borderRadius: 2, 
                    width: '45%', 
                    color: 'black',
                    mt:isMobile? 5:0
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: isMobile? '10px':'24px' }}>
                    Total Properties Available 
                  </Typography>
                  <Typography variant="h4" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', marginTop: 1 }}>
                    {propertyList && propertyList.length > 0 ? propertyList[0].total_available_property : 'Loading...'}
                  </Typography>
                </Box>
            </Box>
            </Box>
            
            <Container className='property-content-body'>
                <Grid container row spacing={2}>
                    <Grid item size={{ md: 8 }}>
                    <Typography variant="h5" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', marginBottom: 2 }}>
                            List of Properties
                        </Typography>
                    </Grid>
                    <Grid item size={{md: 4  }}>
                    <Button
                      onClick={handleClickOpenCreateListing}
                          variant="contained"
                          color="primary"
                          sx={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '700',
                            fontSize: '14px',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            backgroundColor:'orange',
                            ml:isMobile? 0:20,
                            float:'right'
                          }}
                        >
                          Add New Listing
                        </Button>
                    </Grid>
                    <Grid container row spacing={5} sx={{marginBottom:'30px',width:'100%'}}>
                      {propertyList.map((house)=>(
                        <Grid item size={{ xs: 6, lg: 3 }} key={house.uid} >
                            <Card className='container-3-card' onClick={() => navigate(`/product/${house.uid}`)} sx={{ position: 'relative' }}>
                            <IconButton
                                sx={{
                                  position: 'absolute',
                                  top: 8,
                                  right: 40, // Adjusted position to leave space for the delete button
                                  color: 'blue',
                                  zIndex: 1,
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClickOpenUpdateListing(house.uid); // Function to handle update action
                                }}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                sx={{
                                  position: 'absolute',
                                  top: 8,
                                  right: 8,
                                  color: 'red',
                                  zIndex: 1,
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClickOpenDeleteListing(house.uid)
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                              <CardMedia
                                sx={{ height: 140 }}
                                  image={`${axios.defaults.baseURL}${house.property_image}`}
                                title="house"
                              />
                              <CardContent>
                                <Typography className='card-name' gutterBottom variant="h5" component="div">
                                  {house.property_name}
                                </Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                              <Box sx={{width:'100%',alignItems: 'center', padding: 1, border: '1px solid rgba(128, 128, 128, 0.5)' }}>
                                  <Typography variant="body2"><BedIcon sx={{ marginRight: 1,color:'black',verticalAlign: 'middle' }} />{house.no_of_rooms}</Typography> 
                                </Box>
                                
                                <Box sx={{width:'100%',alignItems: 'center', padding: 1,border: '1px solid rgba(128, 128, 128, 0.5)' }}>
                                  <Typography variant="body2"><BathtubIcon sx={{ marginRight: 1,color:'black',verticalAlign: 'middle' }}  />{house.no_of_bathroom}</Typography>
                                </Box>
                                
                                <Box sx={{width:'100%',alignItems: 'center', padding: 1,border: '1px solid rgba(128, 128, 128, 0.5)' }}>
                                  <Typography variant="body2"><Grid3x3Icon sx={{ marginRight: 1,color:'black',verticalAlign: 'middle' }}/>{house.no_of_grid}</Typography>
                                </Box>
                              </CardActions>
                            </Card>
                    </Grid>
                      ))}
                  </Grid>
                </Grid>
            </Container>
            <Footer/>
        </Container>
        </>
    )
  }

  export default AdminPage
