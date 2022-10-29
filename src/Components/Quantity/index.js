import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const defaultStyle = {
  backgroundColor: "purple",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  cursor: "pointer",
};

const Quantity = (props) => {
  const {
    value,
    setValue,
    spacing,
    btnStyle,
    btnIconStyle,
    textStyle,
    min = 0,
    max = 100,
  } = props;

  const onDecrement = () => {
    if (value <= min) {
      setValue(min);
      return;
    }
    setValue(value - 1);
  };

  const onIncrement = () => {
    if (max) {
      if (value >= max) {
        return;
      }
    }
    setValue(value + 1);
  };

  return (
    <Stack direction="row" spacing={spacing || 1}>
      <Box
        sx={[defaultStyle, btnStyle, { opacity: value <= min ? 0.4 : 1 }]}
        onClick={onDecrement}
      >
        <RemoveIcon sx={btnIconStyle} />
      </Box>
      <Typography sx={[textStyle]}>{value}</Typography>
      <Box
        sx={[defaultStyle, btnStyle, { opacity: value >= max ? 0.4 : 1 }]}
        onClick={onIncrement}
      >
        <AddIcon sx={btnIconStyle} />
      </Box>
    </Stack>
  );
};

export default Quantity;
