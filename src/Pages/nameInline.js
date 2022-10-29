/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Layout from "./layout";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import InlineInputEdit from "../Components/InlineValueEdit";

function InlineValueEdit() {
  const [value, setValue] = useState("Talib");

  console.log({ value });
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
                      <Box fontWeight="bold">Inline Value Edit</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <InlineInputEdit
                      EditIcon={EditIcon}
                      TickIcon={CheckIcon}
                      value={value}
                      setValue={setValue}
                      errorMsg="value is required"
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
                      <Box fontWeight="bold">Outline Inline Value Edit</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <InlineInputEdit
                      EditIcon={EditIcon}
                      TickIcon={CheckIcon}
                      value={value}
                      setValue={setValue}
                      errorMsg="value is required"
                      variant="outlined"
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
                      <Box fontWeight="bold">Filled Inline Value Edit</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <InlineInputEdit
                      EditIcon={EditIcon}
                      TickIcon={CheckIcon}
                      value={value}
                      setValue={setValue}
                      errorMsg="value is required"
                      variant="filled"
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

export default InlineValueEdit;
