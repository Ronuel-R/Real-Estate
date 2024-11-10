    /* eslint-disable react/prop-types */
    /* eslint-disable no-unused-vars */
    import { useState } from 'react'
    import '../css/property_page.css'
    import Container from '@mui/material/Container';
    import Box from '@mui/material/Box';
    import '@fontsource/dm-sans/400.css';
    import Header from '../components/header';
    import Footer from '../components/footer';
    import { Carousel } from "react-responsive-carousel";
    import houseImage from '../assets/house.jpg';
    import "react-responsive-carousel/lib/styles/carousel.min.css";
    import Grid from '@mui/material/Grid2';
    import { Chip, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
    import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
    import Avatar from '@mui/material/Avatar';
    import UserImage from '../assets/avatar.jpg'
    import BedIcon from '@mui/icons-material/Bed';
    import BathtubIcon from '@mui/icons-material/Bathtub';
    import Grid3x3Icon from '@mui/icons-material/Grid3x3';
    import GarageIcon from '@mui/icons-material/Garage';
    import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
    import CheckIcon from '@mui/icons-material/Check';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import Slider from 'react-slick';
        import { Card, CardContent, CardMedia } from '@mui/material';

  const imageList = [
    {id: 1, image:houseImage},
    {id: 2, image:houseImage},
    {id: 3, image:houseImage},
    {id: 4, image:houseImage},
    {id: 5, image:houseImage},
]
const similarListings = [
    { id: 1, title: 'Modern Apartment', description: '2 Bed, 1 Bath', price: '$1200/month', image: houseImage },
    { id: 2, title: 'Cozy Condo', description: '1 Bed, 1 Bath', price: '$900/month', image: houseImage },
    { id: 3, title: 'Luxury Villa', description: '4 Bed, 3 Bath', price: '$3000/month', image: houseImage},
    { id: 4, title: 'Beach House', description: '3 Bed, 2 Bath', price: '$2500/month', image: houseImage },
    { id: 5, title: 'City Loft', description: '1 Bed, 1 Bath', price: '$1300/month', image: houseImage },
    // Add more listings as needed
  ];


  function ProductPage() {
    const settings = {         
        infinite: true,         
        speed: 500,             
        slidesToShow: 3,        
        slidesToScroll: 1,      
        autoplay: true,         
        autoplaySpeed: 2000,    
        responsive: [
          {
            breakpoint: 768,      
            settings: {
              slidesToShow: 1,    
            },
          },
        ],
      };
    return (
      <>
          <Container className='property-container-body' maxWidth>
            <Box className='property-container-1'>
                <Header/>
                <Divider sx={{ borderColor: '#FFFFFF', width: '100%',opacity:'0.1', margin: '0 auto',mt:'2%' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft:  20,marginTop:2 }}>
                        <Typography variant="h6" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', color: 'white', fontSize: '32px' }}>
                        Malto House
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', color: '#FFFFFF', opacity: 0.6, fontSize: '15px' }}>
                        3002 Foster Ave, Brooklyn, NY 11210, USA
                        </Typography>
                    </Box>
                    
                    <Box sx={{ textAlign: 'right', marginRight:  20,marginTop:4}}>
                        <Typography variant="h6" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', color: 'white', fontSize: '24px' }}>
                        $500,000
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', color: '#FFFFFF', opacity: 0.6, fontSize: '15px' }}>
                        $500 per sq meter
                        </Typography>
                    </Box>
            </Box>
            </Box>
            
            <Container className='property-content-body'>
                <Grid container row spacing={2}>
                    <Grid item size={{ md: 8 }}>
                        <Carousel infiniteLoop autoPlay>
                            {imageList.map((image) => (
                                <img
                                className="crsl-img"
                                key={image.id}
                                src={image.image}
                                alt="No Image"
                                />
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid item size={{ md: 4  }}>
                        <Paper className='product-inquire' elevation={5} >
                            <Grid container direction={'row'} spacing={2} sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <Paper className='product-user-profile'>
                                    <Avatar alt="Remy Sharp" src={UserImage} sx={{marginLeft:'5%'}}/>
                                    <Box sx={{ marginLeft: 2 }}>
                                    <Typography variant="h6" sx={{ fontFamily: 'DM Sans, sans-serif',fontWeight:'700' }}>Remy Sharp</Typography>
                                        <a style={{ marginTop: 1,color:'orange', cursor:'pointer    ' }}>View profile</a>
                                    </Box>
                                </Paper>
                                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width:'90%'}}/>
                                <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{width:'90%'}}/>
                                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'90%'}}/>
                                <TextField
                                    id="filled-multiline-static"
                                    label="Hello, I am interested in…"
                                    multiline
                                    rows={2}
                                    variant="outlined"
                                    sx={{width:'90%'}}
                                    />
                                <Box className='product-2-background'>
                                <a className="product-2-button" >Learn more<ArrowRightAltIcon sx={{ marginLeft: 1,color:'orange',verticalAlign: 'middle' }} /></a>
                                </Box>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item size={{ md: 8}}>
                    <Paper className='product-details' elevation={5} sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '70%' }}>
                        <Typography variant="h5" sx={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', marginBottom: 2 }}>
                            Details
                        </Typography>

                        {/* Icons row at the bottom */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, border: '1px solid rgba(128, 128, 128, 0.5)', flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                            <Typography variant="body2">
                                <BedIcon sx={{ marginRight: 1, color: 'black', verticalAlign: 'middle' }} />3
                            </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, border: '1px solid rgba(128, 128, 128, 0.5)', flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                            <Typography variant="body2">
                                <BathtubIcon sx={{ marginRight: 1, color: 'black', verticalAlign: 'middle' }} />3
                            </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, border: '1px solid rgba(128, 128, 128, 0.5)', flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                            <Typography variant="body2">
                                <Grid3x3Icon sx={{ marginRight: 1, color: 'black', verticalAlign: 'middle' }} />3
                            </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, border: '1px solid rgba(128, 128, 128, 0.5)', flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                            <Typography variant="body2">
                                <GarageIcon sx={{ color: 'black', verticalAlign: 'middle' }} />3
                            </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, border: '1px solid rgba(128, 128, 128, 0.5)', flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                            <Typography variant="body2">
                                <CalendarTodayIcon sx={{ marginRight: 1, color: 'black', verticalAlign: 'middle' }} />2007
                            </Typography>
                            </Box>
                        </Box>
                        </Paper>
                    </Grid>
                    <Grid item size={{ md: 8 }}>
                        <Paper className='product-description' elevation={5}>
                        <Typography variant="h5" sx={{ padding:2, fontFamily: 'DM Sans, sans-serif', fontWeight: '700', marginBottom: 2 }}>
                            Description
                        </Typography>
                        <Divider sx={{ borderColor: '#E4E4E4', width: '100%', margin: '0 auto',mt:'2%' }} />
                        <Typography className='property-description-content' variant="h5" >
                        At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.

                            Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.

                            Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item size={{ md: 8 }} sx={{mb:5}}>
                    <Paper className='product-features' elevation={5}>
                        <Typography variant="h5" sx={{ padding:4, fontFamily: 'DM Sans, sans-serif', fontWeight: '700' }}>
                            Features
                        </Typography>
                        <Divider sx={{ borderColor: '#E4E4E4', width: '100%', margin: '0 auto',mt:'2%' }} />
                        <Container sx={{ padding: 2 }}>
                        <Stack direction="row" flexWrap="wrap" alignItems="center">
                            <Chip icon={<CheckIcon sx={{ color: 'green !important' }} />} label="Air Condition"  sx={{ margin: '8px' }}/>
                            <Chip icon={<CheckIcon sx={{ color: 'green !important' }} />} label="Air Condition" sx={{ margin: '8px' }}/>
                            <Chip icon={<CheckIcon sx={{ color: 'green !important' }} />} label="Air Condition" sx={{ margin: '8px' }}/>
                            <Chip icon={<CheckIcon sx={{ color: 'green !important' }} />} label="Air Condition" sx={{ margin: '8px' }}/>
                            <Chip icon={<CheckIcon sx={{ color: 'green !important' }} />} label="Air Condition" sx={{ margin: '8px' }}/>
                            <Chip icon={<CheckIcon sx={{ color: 'green !important' }} />} label="Air Condition" sx={{ margin: '8px' }}/>
                        </Stack>
                        </Container>
                        </Paper>
                    </Grid>
                    <Grid item size={{ md: 12 }}>
                    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ fontFamily: 'DM Sans', fontWeight: '700', marginBottom: 2 }}>
        Similar Listings
      </Typography>
      <Slider {...settings}>
        {similarListings.map((listing) => (
          <Box key={listing.id} sx={{ padding: '0 8px', marginBottom: 2  }}>
            <Card className='property-card' sx={{ maxWidth: 345, cursor: 'pointer'}}>
              <CardMedia
                component="img"
                height="140"
                image={listing.image}
                alt={listing.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {listing.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {listing.description}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '700', marginTop: 1 }}>
                  {listing.price}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </Container>
        </>
    )
  }

  export default ProductPage
