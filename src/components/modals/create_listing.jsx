/* eslint-disable react/prop-types */
import { Autocomplete, Button, Chip, InputAdornment, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid2';

export default function CreateListing({handleClose}){
    return (
        <>
        <DialogTitle>Create Listing</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add New Property. Please Fill Out the form correctly and accurately.
              </DialogContentText>
            <Grid container spacing={2}>
            <Grid item size={{lg:6}}>
              <TextField id="outlined-basic" label="Property Name" variant="outlined" sx={{width:'100%'}}/>
              </Grid>
              <Grid item size={{lg:6}}>
              <TextField id="outlined-basic" label="Location" variant="outlined" sx={{width:'100%'}}/>
              </Grid >
              <Grid item size={{lg:12}}>
              <TextField id="outlined-basic" label="Description" variant="outlined" sx={{width:'100%'}} multiline rows={4}/>
              </Grid>
              <Grid item size={{lg:3}}>
                <TextField id="outlined-basic" label="No. of Rooms" variant="outlined" sx={{width:'100%'}}/>
              </Grid >
              <Grid item size={{lg:3}}>
                <TextField id="outlined-basic" label="No. of Bathrooms" variant="outlined" sx={{width:'100%'}}/>
              </Grid >
              <Grid item size={{lg:3}}>
                <TextField id="outlined-basic" label="No. of Grid" variant="outlined" sx={{width:'100%'}}/>
              </Grid >
              <Grid item size={{lg:3}}>
                <TextField id="outlined-basic" label="No. of Garage" variant="outlined" sx={{width:'100%'}}/>
              </Grid >
              <Grid item size={{lg:4}}>
              <TextField
                label="Select Date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                </Grid >
                <Grid item size={{lg:4}}>
                <TextField
                    label="Price"
                    id="outlined-start-adornment"
                    slotProps={{
                        input: {
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        },
                    }}
                    />
                </Grid>
                <Grid item size={{lg:4}}>
                <TextField
                    label="Price per sqm"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="end">per sqm</InputAdornment>,
                      }}
                    />
                </Grid>
                <Grid item size={{lg:12}}>
                <Autocomplete
                    multiple
                    id="tags-filled"
                    freeSolo
                    options={[]} // Empty options since you're not using predefined suggestions
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
                <Grid item size={{lg:12}}>
                    
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{color:'red'}}>Cancel</Button>
              <Button type="submit">Confirm</Button>
            </DialogActions>
    </>
    )
}