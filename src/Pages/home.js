import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

import Layout from "./layout";

export const Home = (props) => {
  return (
    <Layout>
      <Grid
        container
        style={{ padding: 20, flexGrow: 1 }}
        direction="row"
        spacing={4}
      >
        <Grid item sm={2}>
          <Link to="/accordian">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Accordion</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/datepicker">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>DatePicker</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/checkboxes">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>CheckBoxes</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/checkbox-as-button">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Checkbox as Button</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/slider">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Slider</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/radio-buttons">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Radio Buttons</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/inline-edit">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Inline Name Edit</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/quantity">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Quantity</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/map">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Google Map</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/image-card-view">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Image Card View</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/social-icons">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>SocialIcons</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Link to="/offline-online">
            <Paper
              sx={{
                height: 50,
                padding: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography>Online Offline</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};
