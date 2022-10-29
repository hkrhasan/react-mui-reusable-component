/* eslint-disable no-unreachable */
import React, { Fragment } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const MenuBarComp = (props) => {
  const {
    label,
    StartIcon,
    EndIcon,
    childs,
    ExpandMore,
    ExpandLess,
    route,
    ...remain
  } = props;

  const [open, setOpen] = React.useState(false);

  console.log({ props });

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      {!childs && !childs?.length ? (
        <Link to={route} style={{ textDecoration: "none", color: "#000" }}>
          <ListItemButton {...remain}>
            {StartIcon && (
              <ListItemIcon>
                <StartIcon />
              </ListItemIcon>
            )}
            <ListItemText primary={label} />
            {EndIcon && (
              <ListItemIcon>
                <EndIcon />
              </ListItemIcon>
            )}
          </ListItemButton>
        </Link>
      ) : (
        <Fragment>
          <ListItemButton onClick={handleClick} {...remain}>
            {StartIcon && (
              <ListItemIcon>
                <StartIcon />
              </ListItemIcon>
            )}
            <ListItemText primary={label} />
            {open ? ExpandLess && <ExpandLess /> : ExpandMore && <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {childs?.map((child, index) => (
                <MenuBarComp {...child} sx={{ pl: 4 }} />
              ))}
            </List>
          </Collapse>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MenuBarComp;
