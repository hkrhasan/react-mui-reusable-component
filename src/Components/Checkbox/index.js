import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes(props) {
  const {
    boxes,
    showLabel,
    direction,
    color,
    setBoxes,
    size,
    labelPlacement,
    labelStyle,
  } = props;

  const onClick = (index) => {
    const bx = [...boxes];
    const crBx = bx[index];
    if (crBx.checked) {
      crBx.checked = false;
    } else {
      crBx.checked = true;
    }

    bx[index] = crBx;
    setBoxes(bx);
  };

  return (
    <Stack spacing={2} direction={direction}>
      {boxes?.map((box, index) => {
        if (showLabel) {
          return (
            <FormControlLabel
              sx={labelStyle}
              control={
                <Checkbox
                  color={color}
                  checked={box.checked}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: size } }}
                />
              }
              label={box.label}
              onClick={() => onClick(index)}
              labelPlacement={labelPlacement}
            />
          );
        } else {
          return (
            <Checkbox
              color={color}
              checked={box.checked}
              onClick={() => onClick(index)}
              sx={{ "& .MuiSvgIcon-root": { fontSize: size } }}
            />
          );
        }
      })}
    </Stack>
  );
}
