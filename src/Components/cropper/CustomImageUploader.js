import { Avatar, Card, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { customTheme as theme } from "../theme/customTheme";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@mui/styles';
import CustomCropperModal from './CustomCropperModal';

export const CustomImageUploader = (props) => {
    const { imageWrapperWidth, imageWrapperHeight, onSubmitImage, isLogo, setIsLogo, logoHelperText } = props
    const classes = useStyles();
    const [display, setDisplay] = useState("notdisplayed");
    const [image, setImage] = useState("");
    const [cropperFlag, setCropperFlag] = useState(false);

    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };

    const onChange = (e) => {
        console.log('e', e)
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
            setCropperFlag(true)
        };
        reader.readAsDataURL(files[0]);
    };

    const dataUrlToFile = async (dataUrl, fileName) => {
        const res = await fetch(dataUrl);
        const buf = await res.arrayBuffer();
        return new File([buf], fileName, { type: 'image/png' });
    }

    const onLogoSubmit = (acceptedFilesData) => {
        dataUrlToFile(acceptedFilesData, 'username').then((res) => {
            setIsLogo({ path: acceptedFilesData.replace("data:image/png;", ""), flag: true });
            onSubmitImage(acceptedFilesData, res)
        })
    };

    return <>
        <Card className={classes.logo} elevation={5}>
            {
                isLogo?.flag ? <Box
                    onMouseEnter={e => showButton(e)}
                    onMouseLeave={e => hideButton(e)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: imageWrapperWidth,
                        height: imageWrapperHeight,
                        backgroundColor: "#ddd",
                        fontSize: 65,
                        fontWeight: 700,
                        position: "relative"
                    }}>
                    {
                        <img src={isLogo?.path} className={classes.img} onLoad={() => { URL.revokeObjectURL(isLogo?.path) }} />
                    }
                    {
                        display == "displayed" &&
                        <Box className={classes.editLogo} >
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onChange} />
                            <label htmlFor="icon-button-file" style={{ display: "block", "lineHeight": 1 }}>
                                <IconButton color="primary" aria-label="upload picture" component="span" style={{ display: "block" }}>
                                    <EditOutlinedIcon fontSize="medium" style={{ color: "#fff" }} />
                                </IconButton>
                            </label>
                        </Box>
                    }
                </Box>
                    :
                    <Avatar
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: imageWrapperWidth,
                            height: imageWrapperHeight,
                            backgroundColor: theme.palette.primary.light,
                            fontSize: 65,
                            fontWeight: 700,
                        }}
                        alt="Remy Sharp"
                        onMouseEnter={e => showButton(e)}
                        onMouseLeave={e => hideButton(e)}
                        // src={`${apiUrl}${commonReducer.logo_url}`}
                        className={classes.orange}>
                        {logoHelperText}
                        {
                            display == "displayed" &&
                            <Box className={classes.editLogo} >
                                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onChange} />
                                <label htmlFor="icon-button-file" style={{ display: "block", "lineHeight": 1 }}>
                                    <IconButton color="primary" aria-label="upload picture" component="span" style={{ display: "block" }}>
                                        <EditOutlinedIcon fontSize="medium" style={{ color: "#fff" }} />
                                    </IconButton>
                                </label>
                            </Box>
                        }
                    </Avatar>
            }
        </Card>
        {
            cropperFlag && <CustomCropperModal openHandler={cropperFlag} toggleHandler={setCropperFlag} image={image} setImage={setImage} uploadAgain={onChange} onSubmitImage={onLogoSubmit} />
        }
    </>
}


const useStyles = makeStyles(theme => ({
    logo: {
        borderRadius: '50% !important',
        maxWidth: 210,
        height: 210,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // minWidth: 210,
        flexDirection: "column"

    },
    modal: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayed: {
        display: "flex",
        height: "20px",
        margin: "auto",
    },
    notdisplayed: {
        display: "none"
    },
    input: {
        display: 'none',
    },
    body: {
    },
    editIcon: {
        position: "absolute",
        height: "45px",
        width: "100%",
        right: 0,
        padding: 0,
        top: "auto",
        left: 0,
        bottom: 0,
        textAlign: "center"
    },
    img: {
        borderRadius: 10,
        aspectRatio: 1,
        width: "100%",
        height: "100%",
        objectFit: "contain"
    },
    logo: {
        borderRadius: '50%',
        maxWidth: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column"
    },
    editLogo: {
        padding: "0",
        position: "absolute",
        width: "100%",
        textAlign: "center",
        top: "auto",
        bottom: 0,
        background: "#33333350"
    },
}));


