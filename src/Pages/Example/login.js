import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../../Components/Button';
import { CustomTextField } from '../../Components/TextField'
import { getErrorMsz } from './validator';
import Select from 'react-select'
import { CustomOtp } from '../../Components/Otp';

export const Login = () => {
    const [pageData, setPageData] = useState({ email: "", password: "", confirm: "", mobile: "", resetP: "", confirmResetP: "", gender: "", otp: "" });
    const [loginSubmitFlag, setLoginSubmitFlag] = useState(false)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const submit = () => {
        setLoginSubmitFlag(true);

        var errorMszDom = [];
        setTimeout(() => {
            errorMszDom = document.getElementsByClassName("errorDom");
            if (errorMszDom.length == 0) {
                console.log('pageData', pageData)// After all error cleared, write logic to submit the form
            }
        });
    }

    const savedOtp = 1234;
    const [otp, setOtp] = useState();
    const [hasErrored, setHasErrored] = useState(false);
    const [errorMsz, setErrorMsz] = useState("");
    const handleChangeOtp = (value) => {
        setPageData({ ...pageData, otp: value })
    }

    const setInput = (value, type) => {
        setPageData({ ...pageData, [type]: value })
    }

    return <Grid container style={{ padding: 20 }}>
        <Grid item sm={12} className="d-flex" justifyContent="center">
            <Grid item sm={8} >
                <Box width={1} mb={5} >
                    <Grid container spacing={2}>
                        <Grid item sm={12}>
                            <CustomTextField
                                label="E-mail address"
                                fullWidth
                                required
                                error={loginSubmitFlag && getErrorMsz('email', pageData.email) != ""}
                                onChange={(e) => setInput(e.target.value, "email")}
                                errorMsz={getErrorMsz('email', pageData.email)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <CustomTextField
                                label="Password"
                                fullWidth
                                required
                                type="password"
                                error={loginSubmitFlag && getErrorMsz('password', pageData.password) != ""}
                                onChange={(e) => setInput(e.target.value, "password")}
                                errorMsz={getErrorMsz('password', pageData.password)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <CustomTextField
                                label="Confirm"
                                fullWidth
                                required
                                error={loginSubmitFlag && getErrorMsz('confirm', pageData.confirm, pageData.password) != ""}
                                onChange={(e) => setInput(e.target.value, "confirm")}
                                errorMsz={getErrorMsz('confirm', pageData.confirm, pageData.password)}
                            />
                        </Grid>

                        <Grid item sm={12}>
                            <CustomTextField
                                label="Mobile"
                                fullWidth
                                required
                                type="number"
                                startIcon="+91-"
                                error={loginSubmitFlag && getErrorMsz('mobile', pageData.mobile) != ""}
                                onChange={(e) => setInput(e.target.value, "mobile")}
                                errorMsz={getErrorMsz('mobile', pageData.mobile)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <CustomTextField
                                label="Reset Password"
                                fullWidth
                                required
                                type="password"
                                error={loginSubmitFlag && getErrorMsz('resetP', pageData.resetP) != ""}
                                onChange={(e) => setInput(e.target.value, "resetP")}
                                errorMsz={getErrorMsz('resetP', pageData.resetP)}
                            />
                        </Grid>

                        <Grid item sm={6}>
                            <CustomTextField
                                label="Confirm Reset Password"
                                fullWidth
                                required
                                error={loginSubmitFlag && getErrorMsz('confirmResetP', pageData.confirmResetP, pageData.resetP) != ""}
                                onChange={(e) => setInput(e.target.value, "confirmResetP")}
                                errorMsz={getErrorMsz('confirmResetP', pageData.confirmResetP, pageData.resetP)}
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Select options={options} />
                        </Grid>
                        <Grid item sm={12}>
                            <CustomTextField
                                label="Select Gender"
                                fullWidth
                                required
                                select
                                selectArr={options}
                                selectDefaultOption={{ value: "default0", label: "Select Gender" }}
                                value={pageData.gender}
                                onChange={(e) => setInput(e.target.value, "gender")}
                                error={loginSubmitFlag && getErrorMsz('gender', pageData.gender) != ""}
                                errorMsz={getErrorMsz('gender', pageData.gender)}
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <CustomOtp
                                value={pageData.otp}
                                handleChange={handleChangeOtp}
                                hasErrored={loginSubmitFlag && getErrorMsz('otp', pageData.otp, savedOtp) != ""}
                                errorMsz={getErrorMsz('otp', pageData.otp)}
                            />
                        </Grid>

                        <Grid item sm={12}>
                            <Box textAlign="center"><CustomButton variant="contained" btnText="Submit" onClick={submit} /></Box>
                        </Grid>
                    </Grid>

                </Box>
            </Grid>
        </Grid>
    </Grid>
}
