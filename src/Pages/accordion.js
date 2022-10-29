/* eslint-disable import/no-anonymous-default-export */
import { Grid, Box } from "@mui/material";
import React from "react";
import Layout from "./layout";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CustomAccordion from "../Components/Accordion";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

export const Accordions = (props) => {
  return (
    <Layout>
      <Grid container style={{ padding: 20 }} rowGap={3}>
        <h1>Accordions</h1>
        <Grid item xs="12">
          <CustomAccordion
            title="Basic accordion"
            accordionStyle={{ backgroundColor: "orange", border: "1px solid" }}
            accordionTitleStyle={{ color: "red" }}
            disableIcon={false}
            expandIcon={ExpandCircleDownIcon}
          >
            <Box sx={{ padding: 3, backgroundColor: "red" }}>
              <h3>children of basic accordions</h3>
            </Box>
          </CustomAccordion>
        </Grid>
        <Grid item xs="12">
          <CustomAccordion title="Basic accordion">
            <Box sx={{ padding: 3 }}>
              <h3>children of basic accordions</h3>
            </Box>
          </CustomAccordion>
        </Grid>
        <Grid item xs="12">
          <CustomAccordion
            title="Basic accordion"
            accordionStyle={{ border: "1px solid" }}
          >
            <Box sx={{ padding: 3 }}>
              <h3>children of basic accordions</h3>
            </Box>
          </CustomAccordion>
        </Grid>
        <Grid item xs="12">
          <CustomAccordion
            title="Basic accordion"
            expandIcon={ExpandCircleDownIcon}
          >
            <Box sx={{ padding: 3 }}>
              <h3>children of basic accordions</h3>
            </Box>
          </CustomAccordion>
        </Grid>
        <Grid item xs="12">
          <CustomAccordion title="Basic accordion" disableIcon={true}>
            <Box sx={{ padding: 3 }}>
              <h3>children of basic accordions</h3>
            </Box>
          </CustomAccordion>
        </Grid>
        <Grid item xs="12">
          <CustomAccordion
            title="Basic accordion"
            accordionStyle={{ backgroundColor: "orange" }}
          >
            <Box sx={{ padding: 3 }}>
              <h3>children of basic accordions</h3>
            </Box>
          </CustomAccordion>
        </Grid>
        <Grid item xs="12">
          <CustomAccordion
            title="Basic accordion"
            accordionTitleStyle={{ color: "red" }}
            expendedIcon={VerticalAlignTopIcon}
          >
            <Box sx={{ padding: 3 }}>
              <h3>children of basic accordions</h3>
            </Box>
          </CustomAccordion>
        </Grid>
      </Grid>
    </Layout>
  );
};
