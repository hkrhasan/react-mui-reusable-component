/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import Layout from "./layout";
import Checkboxes from "../Components/Checkbox";
import CheckboxAsButton from "../Components/CheckboxAsButton";

function CheckboxAsButtonPage() {
  const [checks, setChecks] = useState([
    {
      label: "Checkbox",
      checked: true,
    },
    {
      label: "DatePicker",
      checked: true,
      customChild: (check) => (
        <Box
          sx={{
            padding: "20px",
          }}
        >
          this is custom
        </Box>
      ),
    },
    {
      label: "Accordian",
      checked: false,
    },
  ]);

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
                      <Box fontWeight="bold">Basic Chip CheckBoxes</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Stack direction="row">
                    <CheckboxAsButton checks={checks} setChecks={setChecks} />
                  </Stack>
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
                      <Box fontWeight="bold">Color Chip CheckBoxes</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Stack direction="row">
                    <CheckboxAsButton
                      checks={checks}
                      setChecks={setChecks}
                      color="info"
                    />
                  </Stack>
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
                      <Box fontWeight="bold">Size Chip CheckBoxes</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Stack direction="row">
                    <CheckboxAsButton
                      checks={checks}
                      setChecks={setChecks}
                      size="small"
                    />
                  </Stack>
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
                      <Box fontWeight="bold">Spacing Chip CheckBoxes</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Stack direction="row">
                    <CheckboxAsButton
                      spacing={5}
                      checks={checks}
                      setChecks={setChecks}
                    />
                  </Stack>
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
                      <Box fontWeight="bold">Direction Chip CheckBoxes</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Stack direction="row">
                    <CheckboxAsButton
                      spacing={2}
                      checks={checks}
                      setChecks={setChecks}
                      direction={"column"}
                    />
                  </Stack>
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
                      <Box fontWeight="bold">Card Type CheckBoxes</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Stack direction="row">
                    <CheckboxAsButton
                      checks={checks}
                      setChecks={setChecks}
                      type="card"
                    />
                  </Stack>
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
                      <Box fontWeight="bold">Custom Card Type Checkbox</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Stack direction="row">
                    <CheckboxAsButton
                      spacing={2}
                      // stackProps={{ spacing: 4 }}
                      checks={checks}
                      setChecks={setChecks}
                      color="success"
                      chipProps={{
                        sx: {
                          cursor: "pointer",
                        },
                      }}
                      type="card"
                      selectedCardStyle={{
                        backgroundColor: "red",
                        color: "white",
                      }}
                      unSelectedCardStyle={{
                        borderColor: "red",
                        color: "red",
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default CheckboxAsButtonPage;
