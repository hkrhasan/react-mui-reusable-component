import { Box, Typography } from '@material-ui/core';
import React from 'react'
import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export const CustomPhoneNumberWithFlag = (props) => {
    const { required = false, errorMsz, error = false, value } = props;
    return <>
        <PhoneInput
            {...props}
            className={`inputPhoneNumber ${required && error && "error"}`}
            defaultCountry="IN"
        />
        {
            required && error &&
            <Typography variant='body1' className="errorDom" component="span" style={{ color: "rgb(211, 47, 47)", fontSize: 12 }}>
                <Box>{errorMsz}</Box>
            </Typography>
        }
    </>
}
