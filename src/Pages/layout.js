import { Drawer, Grid } from '@mui/material'
import React from 'react'
import { CommonLayout } from './commonLayout'
import { Header } from './header'
import Sidebar from './sidebar'


const Layout = (props) => {
    const [drawerOpenFlag, setDrawerOpenFlag] = React.useState(false)

    return <>
        <Grid container>
            <Grid item sm={12}>
                <Header setDrawerOpenFlag={setDrawerOpenFlag} drawerOpenFlag={drawerOpenFlag} />
            </Grid>
        </Grid>
        {props.children}
        <Drawer
            anchor="left"
            open={drawerOpenFlag}
            onClose={() => setDrawerOpenFlag(false)}
        >
            <Sidebar />
        </Drawer>
    </>
}

export default Layout