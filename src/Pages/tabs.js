import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomTabs from '../Components/customTabs'
import { CommonLayout } from './commonLayout'
import Layout from './layout'
import { Otp } from './otp'
import { Selectbox } from './selectbox'
import { Uploadbox } from './uploadbox'

export const Tabs = () => {
    const tabArr = [
        { label: "CommonLayout", component: <CommonLayout /> },
        { label: "Selectbox", component: <Selectbox /> },
        { label: "Uploadbox", component: <Uploadbox /> },
        { label: "Otp", component: <Otp /> },
    ]

    return <Layout>
        <Grid container style={{ padding: 20 }} direction="row" justifyContent="center">
            <Grid item sm={8}>
                <Grid container>
                    <Grid item sm={4} >
                        <Box mb={2}>
                            <Typography variant='body1' component="span">
                                <Box fontWeight="bold">Tab type 1</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={8} className="d-flex">
                        <CustomTabs
                            tabArr={tabArr}
                            label="Organization"
                            type="1"
                            indicatorColor="red"
                            textColor="primary"
                            scrollButtons="auto"
                            activeIndex={1}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container style={{ padding: 20 }} direction="row" justifyContent="center">
            <Grid item sm={8}>
                <Grid container>
                    <Grid item sm={4} >
                        <Box mb={2}>
                            <Typography variant='body1' component="span">
                                <Box fontWeight="bold">Tab type 2</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={8} className="d-flex">
                        <CustomTabs
                            tabArr={tabArr}
                            label="Organization"
                            type="2"
                            activeIndex={0}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    </Layout>
}


