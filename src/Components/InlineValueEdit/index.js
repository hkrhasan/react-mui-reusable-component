import React from "react";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Typography } from "@material-ui/core";
import OutlinedInput from "@mui/material/OutlinedInput";

const InlineInputEdit = (props) => {
  const {
    EditIcon,
    TickIcon,
    value,
    setValue,
    errorMsg,
    variant,
    styleStack,
    styleInput,
    spacing,
  } = props;
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);

  const CustomInput =
    variant === "outlined"
      ? OutlinedInput
      : variant === "filled"
      ? FilledInput
      : Input;

  return (
    <Stack direction="row" spacing={spacing || 1} sx={styleStack}>
      {edit ? (
        <FormControl error={error} variant={variant || "standard"}>
          <CustomInput
            value={value}
            onChange={(e) => {
              if (e.target.value) {
                setError(false);
              }
              setValue(e.target.value);
            }}
            sx={styleInput}
          />
          {error && <FormHelperText>{errorMsg}</FormHelperText>}
        </FormControl>
      ) : (
        <Typography>{value}</Typography>
      )}
      {edit ? (
        <TickIcon
          onClick={() => {
            if (value) {
              setEdit(false);
            } else setError(true);
          }}
        />
      ) : (
        <EditIcon onClick={() => setEdit(true)} />
      )}
    </Stack>
  );
};

export default InlineInputEdit;
