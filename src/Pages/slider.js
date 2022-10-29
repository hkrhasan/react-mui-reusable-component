/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box, Typography, Stack, SliderThumb } from "@mui/material";
import React, { useState } from "react";
import Layout from "./layout";
import SliderComp from "../Components/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

function SliderPage() {
  const [value, setValue] = useState(0);
  const [rangeValue, setRangeValue] = useState([20, 37]);
  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 37,
      label: "37°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];
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
                      <Box fontWeight="bold">Basic Slider</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box width={300}>
                    <SliderComp value={value} setValue={setValue} />
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
                      <Box fontWeight="bold">Size Slider</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box width={300}>
                    <Stack>
                      <SliderComp
                        value={value}
                        setValue={setValue}
                        size="small"
                      />
                      <SliderComp value={value} setValue={setValue} />
                    </Stack>
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
                      <Box fontWeight="bold">Marks Slider</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box width={300}>
                    <SliderComp
                      value={value}
                      setValue={setValue}
                      marks
                      min={10}
                      max={110}
                      step={30}
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
                      <Box fontWeight="bold">Custom Marks Slider</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box width={300}>
                    <SliderComp
                      value={value}
                      setValue={setValue}
                      min={10}
                      max={110}
                      step={30}
                      valueLabelDisplay="auto"
                      marks={marks}
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
                      <Box fontWeight="bold">Color Slider</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box width={300}>
                    <SliderComp
                      value={value}
                      setValue={setValue}
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
                      <Box fontWeight="bold">Marks Slider</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box width={300}>
                    <SliderComp
                      value={value}
                      setValue={setValue}
                      marks
                      min={10}
                      max={110}
                      step={30}
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
                      <Box fontWeight="bold">Range Slider</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box width={300}>
                    <SliderComp
                      value={rangeValue}
                      setValue={setRangeValue}
                      min={10}
                      max={110}
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
                      <Box fontWeight="bold">Different Thumb Slider</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box width={300}>
                    <SliderComp
                      // components={{ Thumb: CustomThumb }}
                      value={value}
                      setValue={setValue}
                      min={10}
                      max={110}
                      CustomThumb={CustomThumb}
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

export default SliderPage;

// child pass on parent
const CustomThumb = () => {
  return (
    <div
      style={{
        height: "30px",
        width: "30px",
        backgroundColor: "red",
        borderRadius: "50%",
      }}
    ></div>
  );
};
