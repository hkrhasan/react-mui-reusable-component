/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box, Typography, Button, Stack } from "@mui/material";
import React from "react";
import Layout from "./layout";
import OnlineOffline from "../Components/OnlineOffline";
import { useNetwork } from "../hooks";

function OnlineOfflinePage() {
  const { online } = useNetwork();

  return (
    <Layout>
      <Grid
        container
        style={{ padding: 20 }}
        direction="row"
        justifyContent="center"
      >
        <Grid item sm={8}>
          <Grid item sm={12}>
            <Box my={5}>
              <Grid
                container
                className="d-flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item sm={4}>
                  <Box mb={2}>
                    <Typography variant="body1" component="span">
                      Online
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <OnlineOffline online={online} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item sm={12}>
            <Box my={5}>
              <Grid
                container
                className="d-flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item sm={4}>
                  <Box mb={2}>
                    <Typography variant="body1" component="span">
                      Offline
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <OnlineOffline online={!online} reconnectBtn={true} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default OnlineOfflinePage;
