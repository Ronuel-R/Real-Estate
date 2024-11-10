/* eslint-disable react/prop-types */
import { Autocomplete, Button, Chip, InputAdornment, TextField, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid2';
import { useEffect } from 'react';
import axios from '../axios/axios';

export default function UpdateListing({handleClose,selectedVal, propertyInfoUpdate,setPropertyInfoUpdate,Submit}){

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`/real_estate/property/${selectedVal}`, {
                    headers: {
                        "Content-Type": "application/json", // Changed to application/json
                    },
                });
                setPropertyInfoUpdate(response.data.data);
            } catch (error) {
                console.error("Error fetching property:", error);
            }
        };
        fetch();
    }, [selectedVal]);

    return (
        <>
        <form onSubmit={Submit}>

        <DialogTitle>Update Listing</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{mb:2}}>
                Update Property. Please Fill Out the form correctly and accurately.
              </DialogContentText>
            <Grid container spacing={2}>
            <Grid item size={{sm:12,lg:6}}sx={{width:'100%'}}>
              <TextField id="outlined-basic" label="Property Name" value={propertyInfoUpdate.property_name} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , property_name: e.target.value })} variant="outlined" sx={{width:'100%'}}/>
              </Grid>
              <Grid item size={{sm:12,lg:6}}sx={{width:'100%'}}>
              <TextField id="outlined-basic" label="Location" value={propertyInfoUpdate.location} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , location: e.target.value })} variant="outlined" sx={{width:'100%'}}/>
              </Grid >
              <Grid item size={{sm:12,lg:12}} sx={{width:'100%'}}>
              <TextField id="outlined-basic" label="Description" value={propertyInfoUpdate.description} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , description: e.target.value })} variant="outlined" sx={{width:'100%'}} multiline rows={4}/>
              </Grid>
              <Grid item size={{sm:12,lg:3}}sx={{width:'100%'}}>
                <TextField id="outlined-basic" label="No. of Rooms" value={propertyInfoUpdate.no_of_rooms} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , no_of_rooms: e.target.value })} variant="outlined" sx={{width:'100%'}} type='number'/>
              </Grid >
              <Grid item size={{sm:12,lg:3}}sx={{width:'100%'}}>
                <TextField id="outlined-basic" label="No. of Bathrooms" value={propertyInfoUpdate.no_of_bathroom} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , no_of_bathroom: e.target.value })} variant="outlined" sx={{width:'100%'}} type='number'/>
              </Grid >
              <Grid item size={{sm:12,lg:3}}sx={{width:'100%'}}>
                <TextField id="outlined-basic" label="No. of Grid" value={propertyInfoUpdate.no_of_grid} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , no_of_grid: e.target.value })} variant="outlined" sx={{width:'100%'}} type='number'/>
              </Grid >
              <Grid item size={{sm:12,lg:3}}sx={{width:'100%'}}>
                <TextField id="outlined-basic" label="No. of Garage" value={propertyInfoUpdate.no_of_garage} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , no_of_garage: e.target.value })} variant="outlined" sx={{width:'100%'}} type='number'/>
              </Grid >
              <Grid item size={{sm:12,lg:4}}sx={{width:'100%'}}>
              <TextField
                label="Select Date"
                type="date"
                value={propertyInfoUpdate.posted_date} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , posted_date: e.target.value })}
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{width:'100%'}}
                />
                </Grid >
                <Grid item size={{sm:12,lg:4}}sx={{width:'100%'}}>
                <TextField
                    type='number'
                    value={propertyInfoUpdate.price} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , price: e.target.value })}
                    label="Price"
                    id="outlined-start-adornment"
                    slotProps={{
                        input: {
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        },
                    }}
                    sx={{width:'100%'}}
                    />
                </Grid>
                <Grid item size={{sm:12,lg:4}}sx={{width:'100%'}}>
                <TextField
                type='number'
                    label="Price per sqm"
                    value={propertyInfoUpdate.price_per_sqm} onChange={(e) => setPropertyInfoUpdate({ ...propertyInfoUpdate  , price_per_sqm: e.target.value })}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="end">per sqm</InputAdornment>,
                      }}
                      sx={{width:'100%'}}
                    />
                </Grid>
                <Grid item size={{sm:12,lg:12}} sx={{width:'100%'}}>
                  <Autocomplete
                      multiple
                      id="tags-filled"
                      freeSolo
                      options={[]}
                      value={propertyInfoUpdate.features || []}
                      onChange={(event, newValue) => {
                        setPropertyInfoUpdate({ ...propertyInfoUpdate, features: newValue });
                      }}
                      renderTags={(value, getTagProps) =>
                          value.map((option, index) => {
                          const { key, ...tagProps } = getTagProps({ index });
                          return (
                              <Chip variant="outlined" label={option} key={key} {...tagProps} />
                          );
                          })
                      }
                      renderInput={(params) => (
                          <TextField
                          {...params}
                          label="Features"
                          placeholder="Add Features Here"
                          />
                      )}
                      />
                </Grid>
                <Grid item size={{sm:12,lg:12}} sx={{width:'100%'}}>
                <input
                  accept="image/*" // Specify allowed file types
                  style={{ display: 'none' }}
                  id="file-upload"
                  type="file"
                  
                  onChange={(e) =>
                    setPropertyInfoUpdate({ ...propertyInfoUpdate, property_image: e.target.files[0] })
                  }
                />
                <label htmlFor="file-upload">
                  <Button variant="contained" component="span">
                    Upload File
                  </Button>
                </label>
                {propertyInfoUpdate.property_image && (
                  <Typography variant="body2" sx={{ marginTop: 2 }}>
                   Selected file: {propertyInfoUpdate.property_image.name? propertyInfoUpdate.property_image.name:propertyInfoUpdate.property_image}
                  </Typography>
                )}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{color:'red'}}>Cancel</Button>
              <Button type="submit">Confirm</Button>
            </DialogActions>
            </form>
    </>
    )
}