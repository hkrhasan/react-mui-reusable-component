import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../Pages/layout'
import Select from 'react-select'
import { CustomTextField } from '../Components/TextField';
import { CustomAutoComplete } from '../Components/AutoComplete';

export const Selectbox = () => {
    const [currency, setCurrency] = React.useState('EUR');

    //for single select autocomplete
    const genderArr = [{ "id": 1, "value": "Male" }, { "id": 2, "value": "Female" }, { "id": 3, "value": "Other" }]

    // For single select we set default value as {}
    const [genderValue, setgenderValue] = useState({ obj: {}, id: "" })

    // For muiltiselect we set default value as []
    const [genderMultipleValue, setGenderMultipleValue] = useState({ obj: [], id: [] })

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return <Layout>
        <Grid container style={{ padding: 20 }} direction="row" justifyContent="center">
            <Grid item sm={8}>
                <Grid container>
                    <Grid item sm={12}>
                        <Box my={5}>
                            <Grid container className="d-flex" justifyContent="center" alignContent="center">
                                <Grid item sm={4} >
                                    <Box mb={2}>
                                        <Typography variant='body1' component="span">
                                            <Box fontWeight="bold">SelectBox</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box width={1}>
                                        <Select options={options} />
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
                                            <Box fontWeight="bold">SelectBox multiple</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box width={1}>
                                        <Select
                                            isMulti
                                            name="colors"
                                            options={options}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
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
                                            <Box fontWeight="bold">Input Select</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box width={1}>
                                        <CustomTextField
                                            label="Select Gender"
                                            fullWidth
                                            select
                                            selectArr={options}
                                            selectDefaultOption={{ value: "default0", label: "Select Gender" }}
                                        />
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
                                            <Box fontWeight="bold">Autocomplete single select</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box width={1}>
                                        <CustomAutoComplete
                                            id="Gender"
                                            options={genderArr}
                                            getoptionlabelkey="value" // this is one of the key from array which is to show option in dropdown
                                            selectedvalue={genderValue.obj}
                                            onChange={(_event, newData) => {
                                                setgenderValue({ ...genderValue, obj: newData, id: newData.id })
                                            }}
                                        />
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
                                            <Box fontWeight="bold">Autocomplete multi Select select</Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={8} className="d-flex">
                                    <Box width={1}>
                                        <CustomAutoComplete
                                            multiple={true}
                                            id="Gender"
                                            options={genderArr}
                                            getoptionlabelkey="value" // this is one of the key from array which is to show option in dropdown
                                            selectedvalue={genderMultipleValue.obj}
                                            onChange={(_event, newData) => {
                                                console.log('newData', newData)
                                                setGenderMultipleValue({ ...genderMultipleValue, obj: newData, id: newData.map((option) => option.id) })
                                            }}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Layout >
}