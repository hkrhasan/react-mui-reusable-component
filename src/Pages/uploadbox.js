import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../Components/Button'
import Layout from '../Pages/layout'


export const Uploadbox = () => {
    const [file, setFile] = useState();

    const onFileUpload = event => {
        setFile(URL.createObjectURL(event.target.files[0]));

    };
    return <Layout>
        <Box textAlign={"center"} mt={10}>
            <Box item sm={12}>
                <CustomButton btnText="Upload Button" variant="contained" upload multiple={true} onUpload={(event) => onFileUpload(event)} />
            </Box>
            <Box item sm={12}>
                <img src={file} />
            </Box>
        </Box>
    </Layout>
}
