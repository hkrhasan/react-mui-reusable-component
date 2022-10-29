import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const CustomSnackbar = (props) => {
   // console.log('props', props)
    const { snackbarFlag, msz, type, setSnakeBarProps } = props
    const [open, setOpen] = React.useState(snackbarFlag);

    const handleClose = (event, reason) => {
        setSnakeBarProps({})
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
            {msz}
        </Alert>
    </Snackbar>
}

