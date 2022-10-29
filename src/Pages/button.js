import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../Components/Button'
import Layout from './layout'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export const Button = () => {

    const onClick = () => {
        alert("clicked")
    }

    return <Layout>
        <Grid container style={{ padding: 20 }} direction="row" justifyContent="center">
            <Grid item sm={8}>
                <Grid container >
                    <Grid item sm={12}>
                        <Box my={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Variant</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box>
                                        <CustomButton btnText="Text" onClick={onClick} />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomButton btnText="Outlined" variant="outlined" onClick={onClick} />
                                    </Box>
                                    <Box >
                                        <CustomButton btnText="Contained" variant="contained" onClick={onClick} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box mb={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Color</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box >
                                        <CustomButton btnText="Primary" variant="contained" color="primary" onClick={onClick} />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomButton btnText="Secondary" variant="contained" color="secondary" onClick={onClick} />
                                    </Box>
                                    <Box >
                                        <CustomButton btnText="Success" variant="contained" color="success" onClick={onClick} />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomButton btnText="Error" variant="contained" color="error" onClick={onClick} />
                                    </Box>
                                    <Box >
                                        <CustomButton btnText="Info" variant="contained" color="info" onClick={onClick} />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomButton btnText="Warning" variant="contained" color="warning" onClick={onClick} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box mb={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Icon Buttons</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box >
                                        <CustomButton btnText="Left Icon" variant="contained" startIcon={<DeleteIcon />} onClick={onClick} />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomButton btnText="Right Icon" variant="contained" endIcon={<SendIcon />} onClick={onClick} />
                                    </Box>

                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box mb={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Upload Button</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box >
                                        <CustomButton btnText="Upload Button" variant="contained" upload />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box mb={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Size</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box >
                                        <CustomButton btnText="Large" variant="contained" size="large" onClick={onClick} />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomButton btnText="Medium" variant="contained" size="medium" onClick={onClick} />
                                    </Box>
                                    <Box >
                                        <CustomButton btnText="Small" variant="contained" size="small" onClick={onClick} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box mb={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Disabled</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8}>
                                    <Box>
                                        <CustomButton btnText="Disabled Button" variant="contained" disabled />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box mb={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Without Elevation / Shadow</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8}>
                                    <Box>
                                        <CustomButton btnText="Button Without Elevation / Shadow" variant="contained" disableElevation onClick={onClick} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box mb={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Loading</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box >
                                        <CustomButton startIcon={<SendIcon />} loadingPosition="start" variant="outlined" loading />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomButton endIcon={<SendIcon />} loadingPosition="end" variant="outlined" loading />
                                    </Box>
                                    <Box >
                                        <CustomButton variant="outlined" loading />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomButton loadingIndicator="Loading..." variant="outlined" loading size="large" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid >
            </Grid>
        </Grid >
    </Layout >
}
