import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtons(props) {
  const {
    title,
    buttons,
    direction,
    defaultValue,
    size,
    color,
    value,
    setValue,
    showLabel,
    labelPlacement,
    type,

    // chip radio buttons props
    stackProps,
    spacing,
    chipProps,
    ...other
  } = props;
  const row = direction === "row" ? true : false;



  return (
    <FormControl {...other}>
      {title && (
        <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      )}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        value={value}
        name={title}
        row={row}
      >
        {buttons.map((btn, index) => (
          <FormControlLabel
            key={index}
            value={btn.value}
            onChange={(e) => setValue(e.target.value)}
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: size,
                  },
                }}
                color={color}
              />
            }
            labelPlacement={labelPlacement}
            label={showLabel && btn.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
