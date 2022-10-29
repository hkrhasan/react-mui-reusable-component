/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import Layout from "./layout";
import SocialIcons from "../Components/SocialIcons";

function SocialIconsPage() {
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
                      <Box fontWeight="bold">Social Icons</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <SocialIcons
                      icons={[
                        {
                          icon: "facebook",
                        },
                        {
                          icon: "google",
                        },
                        {
                          icon: "linkedin",
                        },
                      ]}
                      spacing={3}
                    />
                  </Box>
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
                      <Box fontWeight="bold">Social Icons background</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <SocialIcons
                      icons={[
                        {
                          icon: "facebook",
                        },
                        {
                          icon: "google",
                        },
                        {
                          icon: "linkedin",
                        },
                      ]}
                      spacing={3}
                      withBackground={true}
                    />
                  </Box>
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
                      <Box fontWeight="bold">Social Icons direction</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <SocialIcons
                      icons={[
                        {
                          icon: "facebook",
                        },
                        {
                          icon: "google",
                        },
                        {
                          icon: "linkedin",
                        },
                      ]}
                      spacing={3}
                      withBackground={true}
                      direction="column"
                    />
                  </Box>
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
                      <Box fontWeight="bold">Social Icons iconColor</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <SocialIcons
                      icons={[
                        {
                          icon: "facebook",
                        },
                        {
                          icon: "google",
                        },
                        {
                          icon: "linkedin",
                        },
                      ]}
                      spacing={3}
                      withBackground={true}
                      iconColor="red"
                    />
                  </Box>
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
                      <Box fontWeight="bold">Social Icons iconSize</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <SocialIcons
                      icons={[
                        {
                          icon: "facebook",
                        },
                        {
                          icon: "google",
                        },
                        {
                          icon: "linkedin",
                        },
                      ]}
                      spacing={3}
                      withBackground={true}
                      iconSize={40}
                    />
                  </Box>
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
                      <Box fontWeight="bold">Social Icons with text</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <SocialIcons
                      icons={[
                        {
                          icon: "facebook",
                          text: "Facebook",
                        },
                        {
                          icon: "google",
                          text: "Google",
                        },
                        {
                          icon: "linkedin",
                          text: "Linkedin",
                        },
                      ]}
                      spacing={3}
                      withBackground={true}
                    />
                  </Box>
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
                      <Box fontWeight="bold">
                        Social Icons with text without background
                      </Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <SocialIcons
                      icons={[
                        {
                          icon: "facebook",
                          text: "Facebook",
                        },
                        {
                          icon: "google",
                          text: "Google",
                        },
                        {
                          icon: "linkedin",
                          text: "Linkedin",
                        },
                      ]}
                      spacing={3}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default SocialIconsPage;
