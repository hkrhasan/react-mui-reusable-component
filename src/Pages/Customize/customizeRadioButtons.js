/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import RadioButtons from "../../Components/RadioButtons";
import SliderComp from "../../Components/Slider";
import { CustomTextField } from "../../Components/TextField";
import Layout from "../layout";
import { RawCodeLayout } from "./rawCodeLayout";

function CustomizeRadioButtonPage() {
  const localArr = [
    { label: "Checkbox", value: "checkbox" },
    { label: "DatePicker", value: "datepicker" },
    { label: "Accordian", value: "accordian" }
  ];
  const [radioButtonOptionArr, setRadioButtonOptionArr] = useState(localArr);
  const [radioButtonValue, setRadioButtonValue] = useState(undefined);

  const [sizeValue, setSizeValue] = useState("small");
  const [directionValue, setDirectionValue] = useState("row");
  const [placementValue, setPlacementValue] = useState("end");
  const [labelValue, setLabelValue] = useState("true");

  const optionsArr = [
    {
      label: "Size",
      data: [{ label: "Small", value: "small", }, { label: "Medium", value: "medium", }, { label: "Large", value: "large", },],
      value: sizeValue,
      setValue: setSizeValue,
    },
    {
      label: "Direction",
      data: [{ label: "Row", value: "row", }, { label: "Column", value: "column" }],
      value: directionValue,
      setValue: setDirectionValue,
    },
    {
      label: "Placement",
      data: [{ label: "Top", value: "top", }, { label: "Start", value: "start", }, { label: "Bottom", value: "bottom", }, { label: "End", value: "end", }],
      value: placementValue,
      setValue: setPlacementValue,
    },
    {
      label: "Label",
      data: [{ label: "Yes", value: true, }, { label: "No", value: false }],
      value: labelValue,
      setValue: setLabelValue,
    }]

  console.log({ radioButtonValue });

  return (
    <Layout>
      <Grid container style={{ padding: 20 }} direction="row" alignItems="center">
        <Grid item sm={7}>
          <Box width={1} textAlign="center">
            <Typography variant="body1" component="span">
              <Box fontWeight="bold">Selected Value : {radioButtonValue}</Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={7}>
          <Box width={1} textAlign="center">
            <RadioButtons
              title="Radio button"
              buttons={radioButtonOptionArr}
              setButtons={setRadioButtonOptionArr}
              value={radioButtonValue}
              setValue={setRadioButtonValue}
              direction={directionValue}
              showLabel={labelValue}
              size={sizeValue}
              labelPlacement={placementValue}
            />
          </Box>
        </Grid>
        <Grid item sm={5}>
          <Box width={1}>
            <Typography variant="body1" component="span">
              <Box fontWeight="bold">Size Slider</Box>
            </Typography>
            <SliderComp value={sizeValue} setValue={setSizeValue} />
          </Box>
          {
            optionsArr.map((option) => {
              return <Box mt={2}>
                <RadioButtons
                  title={option.label}
                  buttons={option.data}
                  value={option.value}
                  setValue={option.setValue}
                  direction="row"
                  showLabel={"true"}
                />
              </Box>
            })
          }
          {/* <Box width={1} my={3}>
            <CustomTextField id="1"
              fullWidth
              multiline
              row="3"
              label="Radio Arr"
              value={JSON.stringify(radioButtonOptionArr)}
            />
          </Box> */}
        </Grid>
        <Grid item sm={12}>
          <RawCodeLayout>
            {
              `
               const localArr = ${JSON.stringify(radioButtonOptionArr)}
               const [radioButtonOptionArr, setRadioButtonOptionArr] = useState(localArr);
               const [radioButtonValue, setRadioButtonValue] = useState(undefined);
              
              <RadioButtons
                  title="Radio button"
                  buttons={radioButtonOptionArr}
                  setButtons={setRadioButtonOptionArr}
                  value={radioButtonValue}
                  setValue={setRadioButtonValue}
                  
                  direction=${directionValue}
                  showLabel=${labelValue}
                  size=${sizeValue}
                  labelPlacement=${placementValue}
              />`
            }
          </RawCodeLayout>
        </Grid>
      </Grid>
    </Layout >
  );
}

export default CustomizeRadioButtonPage;
