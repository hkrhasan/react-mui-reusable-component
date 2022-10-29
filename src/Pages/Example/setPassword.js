import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../../Components/Button';
import { CustomTextField } from '../../Components/TextField'
import { getErrorMsz } from './validator';

export const SetPassword = () => {
    const [pageData, setPageData] = useState({
        resetP: "",
        confirmResetP: "",
    });

    const [loginSubmitFlag, setLoginSubmitFlag] = useState(false)

    const submit = () => {
        setLoginSubmitFlag(true)

        var errorMszDom = [];
        setTimeout(() => {
            errorMszDom = document.getElementsByClassName("errorDom");
            if (errorMszDom.length == 0) {
                console.log('pageData', pageData)
            }
        });


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
                                label="Reset Password"
                                fullWidth
                                required
                                type="password"
                                error={loginSubmitFlag && getErrorMsz('resetP', pageData.resetP) != ""}
                                onChange={(e) => setInput(e.target.value, "resetP")}
                                errorMsz={getErrorMsz('resetP', pageData.resetP)}
                            />
                        </Grid>

                        <Grid item sm={12}>
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
                            <Box textAlign="center"><CustomButton variant="contained" btnText="Submit" onClick={submit} /></Box>
                        </Grid>
                    </Grid>

                </Box>
            </Grid>
        </Grid>
    </Grid>
}
