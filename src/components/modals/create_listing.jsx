/* eslint-disable react/prop-types */
import { Autocomplete, Button, Chip, InputAdornment, TextField, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid2';

export default function CreateListing({handleClose, propertyInfo,setPropertyInfo,Submit}){
    return (
        <>
        <form onSubmit={Submit}>

        <DialogTitle>Create Listing</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add New Property. Please Fill Out the form correctly and accurately.
              </DialogContentText>
            <Grid container spacing={2}>
            <Grid item size={{sm:12,lg:6}} sx={{width:'100%'}}>
              <TextField id="outlined-basic" label="Property Name" value={propertyInfo.property_name} onChange={(e) => setPropertyInfo({ ...propertyInfo  , property_name: e.target.value })} variant="outlined" sx={{width:'100%'}}/>
              </Grid>
              <Grid item size={{sm:12,lg:6}} sx={{width:'100%'}}>
              <TextField id="outlined-basic" label="Location" value={propertyInfo.location} onChange={(e) => setPropertyInfo({ ...propertyInfo  , location: e.target.value })} variant="outlined" sx={{width:'100%'}}/>
              </Grid >
              <Grid item size={{sm:12,lg:12}} sx={{width:'100%'}}>
              <TextField id="outlined-basic" label="Description" value={propertyInfo.description} onChange={(e) => setPropertyInfo({ ...propertyInfo  , description: e.target.value })} variant="outlined" sx={{width:'100%'}} multiline rows={4}/>
              </Grid>
              <Grid item size={{sm:12,lg:3}} sx={{width:'100%'}}>
                <TextField id="outlined-basic" label="No. of Rooms" value={propertyInfo.no_of_rooms} onChange={(e) => setPropertyInfo({ ...propertyInfo  , no_of_rooms: e.target.value })} variant="outlined" sx={{width:'100%'}} type='number'/>
              </Grid >
              <Grid item size={{sm:12,lg:3}} sx={{width:'100%'}}>
                <TextField id="outlined-basic" label="No. of Bathrooms" value={propertyInfo.no_of_bathroom} onChange={(e) => setPropertyInfo({ ...propertyInfo  , no_of_bathroom: e.target.value })} variant="outlined" sx={{width:'100%'}} type='number'/>
              </Grid >
              <Grid item size={{sm:12,lg:3}} sx={{width:'100%'}}>
                <TextField id="outlined-basic" label="No. of Grid" value={propertyInfo.no_of_grid} onChange={(e) => setPropertyInfo({ ...propertyInfo  , no_of_grid: e.target.value })} variant="outlined" sx={{width:'100%'}} type='number'/>
              </Grid >
              <Grid item size={{sm:12,lg:3}} sx={{width:'100%'}}>
                <TextField id="outlined-basic" label="No. of Garage" value={propertyInfo.no_of_garage} onChange={(e) => setPropertyInfo({ ...propertyInfo  , no_of_garage: e.target.value })} variant="outlined" sx={{width:'100%'}} type='number'/>
              </Grid >
              <Grid item size={{sm:12,lg:4}} sx={{width:'100%'}}>
              <TextField
                label="Select Date"
                type="date"
                value={propertyInfo.posted_date} onChange={(e) => setPropertyInfo({ ...propertyInfo  , posted_date: e.target.value })}
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{width:'100%'}}
                />
                </Grid >
                <Grid item size={{sm:12,lg:4}} sx={{width:'100%'}}>
                <TextField
                    type='number'
                    value={propertyInfo.price} onChange={(e) => setPropertyInfo({ ...propertyInfo  , price: e.target.value })}
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
                <Grid item size={{sm:12,lg:4}}  sx={{width:'100%'}}>
                <TextField
                type='number'
                    label="Price per sqm"
                    value={propertyInfo.price_per_sqm} onChange={(e) => setPropertyInfo({ ...propertyInfo  , price_per_sqm: e.target.value })}
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
                      value={propertyInfo.features || []}
                      onChange={(event, newValue) => {
                        setPropertyInfo({ ...propertyInfo, features: newValue });
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
                    setPropertyInfo({ ...propertyInfo, property_image: e.target.files[0] })
                  }
                />
                <label htmlFor="file-upload">
                  <Button variant="contained" component="span">
                    Upload File
                  </Button>
                </label>
                {propertyInfo.property_image && (
                  <Typography variant="body2" sx={{ marginTop: 2 }}>
                   Selected file: {propertyInfo.property_image.name}
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