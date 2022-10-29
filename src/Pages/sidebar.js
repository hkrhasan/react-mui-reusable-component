import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { sidebarArr } from "../constant";
import MenuBarComp from "../Components/MenuBar";

function Sidebar() {
  return (
    <Grid container>
      <Box
        width={1}
        sx={{
          borderRight: 1,
          padding: 2,
          height: "calc(100vh - 32px)",
          maxWidth: 360,
          width: 300,
        }}
      >
        {/* {sidebarArr.map((option, index) => {
          return (
            <Grid item sm={12} key={`${option.label}_${index}`}>
              <Box p={2} sx={{ width: "200px" }}>
                <Link
                  to={option.route}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  {option.label}
                </Link>
              </Box>
            </Grid>
          );
        })} */}

        {sidebarArr.map((option, index) => (
          <MenuBarComp key={index} {...option} />
        ))}
      </Box>
    </Grid>
  );
}

export default Sidebar;
