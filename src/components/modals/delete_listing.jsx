/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteListing({handleClose,Submit}){
    return (
        <>
        <form onSubmit={Submit}>
        <DialogTitle>Delete Listing</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Remove Property from the list?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{color:'red'}}>Cancel</Button>
              <Button type="submit">Confirm</Button>
            </DialogActions>
            </form>
    </>
    )
}