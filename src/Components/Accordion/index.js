import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Accordion me
// icon and bg color border colder prop base rahega

const CustomAccordion = (props) => {
  const {
    title,
    children,
    expandIcon,
    accordionStyle,
    accordionTitleStyle,
    disableIcon,
    expendedIcon,
  } = props;

  const [expended, setExpended] = useState(false);

  const ExpendIcon = expended ? expendedIcon : expandIcon;

  return (
    <Accordion
      {...props}
      sx={{ ...accordionStyle, width: "100%" }}
      expanded={expended}
      onChange={(event, currentState) => setExpended(currentState)}
    >
      <AccordionSummary
        expandIcon={
          !disableIcon ? (
            ExpendIcon ? (
              <ExpendIcon
                sx={{
                  transform: expended ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            ) : (
              <ExpandMoreIcon />
            )
          ) : undefined
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={accordionTitleStyle}>{title}</Typography>
      </AccordionSummary>
      {children}
    </Accordion>
  );
};

export default CustomAccordion;
