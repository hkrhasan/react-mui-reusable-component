import * as React from "react";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/material";

export default function RadioButtonsAsChip(props) {
  const {
    buttons,
    direction,
    size,
    color,
    value,
    setValue,
    type,

    // chip radio buttons props
    stackProps,
    spacing,
    chipProps } = props;

  if (type === "chip") {
    return (
      <Stack
        direction={direction || "row"}
        spacing={spacing || 2}
        {...stackProps}
      >
        {buttons.map((btn) => {
          return (
            <Chip
              size={size || "medium"}
              label={btn.label}
              variant={btn.value === value ? "filled" : "outlined"}
              color={color}
              sx={{ cursor: "pointer" }}
              onClick={() => setValue(btn.value)}
              {...chipProps}
            />
          );
        })}
      </Stack>
    );
  }
}
