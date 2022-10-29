import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { CustomSnackbar } from '../Components/CustomSnackbar'
import Layout from './layout'

function Snakebar() {
    const [snakeBarProps, setSnakeBarProps] = useState({});


    const openSnakeBar = (type) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "Organisation name updated successfully", type: type })
    }

    return <Layout>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid container item xs="6" alignItems="center" justifyContent="center" spacing={2}>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => openSnakeBar('success')}>Show Sucess snakebar</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => openSnakeBar('error')}>Show Error snakebar</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => openSnakeBar('warning')}>Show Warning snakebar</Button>
                </Grid>
            </Grid>
        </Grid>
        {
            Object.keys(snakeBarProps).length > 0 &&
            <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
        }
    </Layout>
}

export default Snakebar