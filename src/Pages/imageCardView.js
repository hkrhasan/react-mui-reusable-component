/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Layout from "./layout";
import ImageCardView from "../Components/ImageCardView";

function ImageCardViewPage() {
  const [imgProp, setImgProp] = useState(null);
  const image =
    "https://cdn.pixabay.com/photo/2022/09/13/11/29/girl-7451711_1280.jpg";

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
                      <Button
                        variant="contained"
                        onClick={() => setImgProp(image)}
                      >
                        Update Image
                      </Button>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <ImageCardView
                      imgName="Nothing"
                      imageHeight={400}
                      imgSrc={imgProp}
                      onDelete={() => setImgProp(null)}
                      showImageDetails={true}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* <Grid item sm={12}>
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
                      <Box fontWeight="bold">Image Card rounded</Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={8} className="d-flex">
                  <Box>
                    <ImageCardView sx={{ borderRadius: 2 }} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid> */}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ImageCardViewPage;
