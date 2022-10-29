import React from "react";
import { Stack, CardContent, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";

function CheckboxAsButton(props) {
  const {
    checks,
    setChecks,
    type,
    stackProps,
    direction,
    spacing,
    size,
    color,
    chipProps,
    cardProps,
    cardContentProps,
    cardStyle,
    selectedCardStyle,
    unSelectedCardStyle,
    cardContentStyle,
  } = props;

  const onClick = (index) => {
    const bx = [...checks];
    const crBx = bx[index];
    if (crBx.checked) {
      crBx.checked = false;
    } else {
      crBx.checked = true;
    }

    bx[index] = crBx;
    setChecks(bx);
  };

  return (
    <Stack
      direction={direction || "row"}
      spacing={spacing || 2}
      {...stackProps}
    >
      {checks.map((check, index) => {
        if (type === "card") {
          return (
            <Card
              {...cardProps}
              color={color}
              variant={check.checked ? "elevation" : "outlined"}
              onClick={() => onClick(index)}
              sx={[
                cardStyle,
                check.checked ? selectedCardStyle : unSelectedCardStyle,
              ]}
            >
              {check?.customChild ? (
                check?.customChild()
              ) : (
                <CardContent style={cardContentStyle} {...cardContentProps}>
                  <Typography>{check.label}</Typography>
                </CardContent>
              )}
            </Card>
          );
        }
        return (
          <Chip
            size={size || "medium"}
            label={check.label}
            variant={check.checked ? "filled" : "outlined"}
            color={color}
            onClick={() => onClick(index)}
            {...chipProps}
          />
        );
      })}
    </Stack>
  );
}

export default CheckboxAsButton;
