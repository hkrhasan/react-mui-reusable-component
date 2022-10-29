import { Autocomplete } from '@material-ui/lab'
import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const CustomAutoComplete = (props) => {
    const { id, getoptionlabelkey, selectedvalue, errorMsz, error = false, required = false } = props
    return <>
        <Autocomplete
            popupIcon={<ArrowDropDownIcon fontSize='large' style={{ marginRight: 0 }} />}
            getOptionLabel={(option) => Object.keys(option).length > 0 ? option[getoptionlabelkey] : ""}
            renderInput={params => (
                <TextField {...params} variant='standard' label={required ? `${id}*` : `${id}`} error={error} />
            )}
            // disableClearable
            value={selectedvalue}
            {...props}
        />
        {
            required && error &&
            <Typography variant='body1' className="errorDom" component="span" style={{ color: "rgb(211, 47, 47)", fontSize: 12 }}>
                <Box>{errorMsz}</Box>
            </Typography>
        }
    </>
}

