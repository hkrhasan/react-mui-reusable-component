import React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { Stack } from "@mui/material";

function SliderComp(props) {
  const { value, setValue, CustomThumb, styleThumbWrapper } = props;
  return (
    <Slider
      components={{
        Thumb: CustomThumb
          ? (props) => {
              const { children, ...remain } = props;
              return (
                <SliderThumb
                  sx={[
                    {
                      backgroundColor: "transparent",
                      width: "30px",
                      overFlow: "auto",
                      height: "30px",
                    },
                    styleThumbWrapper,
                  ]}
                  {...remain}
                >
                  {children}
                  <CustomThumb />
                </SliderThumb>
              );
            }
          : (props) => {
              const { children, ...remain } = props;
              return <SliderThumb {...remain}>{children}</SliderThumb>;
            },
      }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
}

export default SliderComp;
