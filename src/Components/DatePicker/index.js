import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function CustomDatePicker(props) {
  const {
    value,
    handleChange,
    label,
    inputFormat,
    renderInput,
    variant,
    OpenPickerIcon,
  } = props;

  const RenderInputComp = renderInput
    ? renderInput
    : (params) => <TextField {...params} variant={variant} />;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat={inputFormat || "MM/DD/YYYY"}
        value={value}
        onChange={handleChange}
        renderInput={RenderInputComp}
        components={{
          OpenPickerIcon: OpenPickerIcon,
        }}
        {...props}
      />
    </LocalizationProvider>
  );
}
