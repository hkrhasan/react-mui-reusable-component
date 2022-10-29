import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import Sidebar from './sidebar';
import { useHref, useLocation, useParams } from 'react-router-dom';
import { getPageUrl } from '../constant';
import { CustomButton } from '../Components/Button';
import HomeIcon from '@mui/icons-material/Home';
export const Header = (props) => {
    const { drawerOpenFlag, setDrawerOpenFlag } = props;
    let location = useLocation();
    // console.log('location', location)
    return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setDrawerOpenFlag(!drawerOpenFlag)}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    href="/"
                >
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Box textAlign="center">
                        Digiappstore React Component List
                    </Box>
                </Typography>

                {
                    getPageUrl('pageSource', location.pathname) != null &&
                    <CustomButton color="secondary" btnText="Page Source" variant="contained" href={getPageUrl('pageSource', location?.pathname)} target="_blank" btnClass={{ marginRight: 10 }} />
                }
                {
                    getPageUrl('componentSource', location.pathname) != null &&
                    <CustomButton color="info" variant="contained" btnText="Component Source" href={getPageUrl('componentSource', location?.pathname)} target="_blank" />
                }

            </Toolbar>
        </AppBar>
    </Box>
}
