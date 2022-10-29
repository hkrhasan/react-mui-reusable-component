import React, { useState } from 'react'
import { Cropper } from 'react-cropper';
import CustomButton from './CustomButton';
import { CustomDialog } from './CustomDialog'
import { Grid, Typography } from "@mui/material";
import "cropperjs/dist/cropper.css";
import { makeStyles } from '@mui/styles';

export default function CustomCropperModal(props) {
    const classes = useStyles();
    const { toggleHandler, openHandler, image, uploadAgain, onSubmitImage } = props;

    const [cropper, setCropper] = useState("");

    const handleClose = () => {
        toggleHandler(false);
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            onSubmitImage(cropper.getCroppedCanvas().toDataURL());
            handleClose();
        }
    };

    return <CustomDialog maxWidth="sm" handleClose={handleClose} open={openHandler}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12} justifyContent={"center"}>
                <Cropper
                    style={{ height: 400, width: "100%" }}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                    onInitialized={(instance) => {
                        setCropper(instance);
                    }}
                    guides={true}
                />
            </Grid>
            <Grid item xs={6} justifyContent={"center"}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="upload_again"
                    multiple
                    type="file"
                    onChange={(e) => uploadAgain(e)}
                />
                <label htmlFor="upload_again">
                    <CustomButton
                        btnText='Upload Again'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        component="span"
                    />
                </label>
            </Grid>
            <Grid item xs={6} justifyContent={"center"}>

                <CustomButton
                    btnText='Continue'
                    variant='contained'
                    color='primary'
                    onClick={getCropData}
                    fullWidth
                />
            </Grid>
        </Grid>

    </CustomDialog>
}

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
}));
