/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Layout from "./layout";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import InlineInputEdit from "../Components/InlineValueEdit";
import Quantity from "../Components/Quantity";

function QuantityPage() {
  const [value, setValue] = useState(0);

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
                      <Box fontWeight="bold">Cart Quantity</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <Quantity value={value} setValue={setValue} />
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

export default QuantityPage;
