/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Layout from "./layout";
import Checkboxes from "../Components/Checkbox";
import RadioButtons from "../Components/RadioButtons";

function RadioButtonPage() {
  const [buttons, setButtons] = useState([
    {
      label: "Checkbox",
      value: "checkbox",
    },
    {
      label: "DatePicker",
      value: "datepicker",
    },
    {
      label: "Accordian",
      value: "accordian",
    },
  ]);
  const [value, setValue] = useState(undefined);

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
                      <Box fontWeight="bold">Basic Radio Buttons</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <RadioButtons
                      buttons={buttons}
                      value={value}
                      setValue={setValue}
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
                      <Box fontWeight="bold">Direction Radio Buttons</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <RadioButtons
                      buttons={buttons}
                      value={value}
                      setValue={setValue}
                      direction="row"
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
                      <Box fontWeight="bold">Show label Radio Buttons</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <RadioButtons
                      buttons={buttons}
                      value={value}
                      setValue={setValue}
                      showLabel={true}
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
                      <Box fontWeight="bold">Size Radio Buttons</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <RadioButtons
                      buttons={buttons}
                      value={value}
                      direction="row"
                      setValue={setValue}
                      size="small"
                    />
                    <RadioButtons
                      buttons={buttons}
                      value={value}
                      direction="row"
                      setValue={setValue}
                      size={30}
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
                      <Box fontWeight="bold">Color Radio Buttons</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <RadioButtons
                      buttons={buttons}
                      setButtons={setButtons}
                      value={value}
                      setValue={setValue}
                      direction="row"
                      showLabel={false}
                      color="secondary"
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
                      <Box fontWeight="bold">labelPlacement Radio Buttons</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <RadioButtons
                      buttons={buttons}
                      setButtons={setButtons}
                      value={value}
                      setValue={setValue}
                      direction="row"
                      showLabel={true}
                      labelPlacement="top"
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
                      <Box fontWeight="bold">Radio Buttons as chip</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <RadioButtons
                      buttons={buttons}
                      setButtons={setButtons}
                      value={value}
                      setValue={setValue}
                      direction="row"
                      type="chip"
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

export default RadioButtonPage;
