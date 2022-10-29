import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from './layout'
import { CustomTextField } from '../Components/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CustomPhoneNumberWithFlag } from '../Components/CustomPhoneNumberWithFlag';


export const Inputbox = () => {
    // const { label, variant, required, disabled, type, readOnly, defaultValue, helperText, error } = props;
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    const [phoneWithFlagValue, setPhoneWithFlagValue] = useState("")

    return <Layout>
        <Grid container style={{ padding: 20 }} direction="row" justifyContent="center">
            <Grid item sm={8}>
                <Grid container style={{ padding: 20 }}>
                    <Grid item sm={12}>
                        <Box mb={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Phone number with flag</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box>
                                        <CustomPhoneNumberWithFlag

                                            limitMaxLength
                                            maxLength={12}
                                            placeholder="Your phone no (10 digit)"
                                            value={phoneWithFlagValue}
                                            onChange={(e) => !isNaN(e) && setPhoneWithFlagValue(e)}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12}>
                        <Box my={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">Input With label</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box>
                                        <CustomTextField id="1" label="Name" />
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
                                            <Box fontWeight="bold">Password</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box>
                                        <CustomTextField id="1" label="Name" type="password" />
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
                                            <Box fontWeight="bold">Variant</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex" justifyContent="center">
                                    <Box>
                                        <CustomTextField id="1" label="Name" variant="outlined" />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomTextField id="1" label="Name" variant="filled" />
                                    </Box>
                                    <Box>
                                        <CustomTextField id="1" label="Name" variant="standard" />
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
                                            <Box fontWeight="bold">Input Without label</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex" justifyContent="center">
                                    <Box>
                                        <CustomTextField id="1" variant="outlined" inputLabel="Name" />
                                    </Box>
                                    <Box mx={3}>
                                        <CustomTextField id="1" variant="filled" inputLabel="Name" />
                                    </Box>
                                    <Box>
                                        <CustomTextField id="1" variant="standard" inputLabel="Name" />
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
                                            <Box fontWeight="bold">Input without label required </Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box>
                                        <CustomTextField id="1" required errorMsz="Enter valid value" error inputLabel="Name" />
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
                                            <Box fontWeight="bold">Input required</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box>
                                        <CustomTextField id="1" label="Name" required errorMsz="Enter valid value" error />
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
                                            <Box fontWeight="bold">Input disabled</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box>
                                        <CustomTextField id="1" label="Name" disabled />
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
                                            <Box fontWeight="bold">Input readonly</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box>
                                        <CustomTextField id="1" label="Name" readOnlyValue={true} defaultValue="Hello World" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>



                </Grid >
            </Grid >
        </Grid >
    </Layout >

}
