import { Button } from '@material-ui/core'
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import CustomLoader from '../Components/loader'
import Layout from './layout'

export default function LoaderLayout() {

    const [loaderFlag, setLoaderFlag] = useState(false)

    return <Layout>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid container item xs="6" alignItems="center" justifyContent="center" spacing={2}>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => setLoaderFlag(!loaderFlag)}>Show</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => setLoaderFlag(!loaderFlag)}>Hide</Button>
                </Grid>
            </Grid>
        </Grid>
        {
            loaderFlag &&
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <CustomLoader />
                </Grid>
            </Grid>
        }
    </Layout>
}
