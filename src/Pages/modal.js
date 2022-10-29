import * as React from 'react';
import Button from '@mui/material/Button';
import Layout from '../Pages/layout'
import { CustomDialog } from '../Components/Dialog_Modal';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Modal = () => {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState('lg');

    const handleClickOpen = (size) => {
        setOpen(true);
        setSize(size)
    };

    const handleClose = () => {
        setOpen(false);
    };
    return <Layout>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={() => handleClickOpen('xs')}>Open xs modal popup</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={() => handleClickOpen('sm')}>Open sm modal popup</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={() => handleClickOpen('md')}>Open md modal popup</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={() => handleClickOpen('lg')}>Open Large modal popup</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={() => handleClickOpen('xl')}>Open x-Large modal popup</Button>
            </Grid>
        </Grid>
        <CustomDialog maxWidth={size} dialogTitle={"Dummy Header"} open={open} handleClose={handleClose}>
            <Box>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box style={{ display: "flex", justifyContent: "center" }}>
                            <Typography><Box>Hello </Box></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </CustomDialog>
    </Layout >
}