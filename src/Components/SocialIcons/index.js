import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Stack, Box, Icon } from "@mui/material";
import { Typography } from "@material-ui/core";

const IconsObj = {
  google: {
    IconComp: GoogleIcon,
  },
  facebook: {
    IconComp: FacebookIcon,
  },
  github: {
    IconComp: GitHubIcon,
  },
  linkedin: {
    IconComp: LinkedInIcon,
  },
  youtube: {
    IconComp: YouTubeIcon,
  },
  twitter: {
    IconComp: TwitterIcon,
  },
};

const SocialIcons = (props) => {
  const {
    icons,
    iconColor,
    iconSize,
    styleIconBox,
    styleIcon,
    transparent,
    withBackground,
    styleText,
    iconContainerDirection,
    ...remain
  } = props;

  return (
    <Stack direction="row" {...remain}>
      {icons.map(({ icon, text }, index) => {
        const { IconComp } = IconsObj[icon];

        if (text) {
          if (withBackground) {
            return (
              <Stack
                direction={iconContainerDirection || "row"}
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={[
                  {
                    cursor: "pointer",
                    backgroundColor: transparent ? "transparent" : "white",
                    borderRadius: 50,
                    boxShadow:
                      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    SocialIcons: "center",
                    padding: 1,
                  },
                  styleIconBox,
                ]}
              >
                <IconComp
                  sx={{
                    color: iconColor || "#00679C",
                    fontSize: iconSize,
                    ...styleIcon,
                  }}
                />
                <Typography>{text}</Typography>
              </Stack>
            );
          }

          return (
            <Stack
              direction={iconContainerDirection || "row"}
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <IconComp
                sx={{
                  color: iconColor || "#00679C",
                  fontSize: iconSize,
                  ...styleIcon,
                }}
              />
              <Typography>{text}</Typography>
            </Stack>
          );
        }

        if (withBackground) {
          return (
            <Box
              sx={[
                {
                  cursor: "pointer",
                  backgroundColor: transparent ? "transparent" : "white",
                  borderRadius: 50,
                  boxShadow:
                    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  SocialIcons: "center",
                  padding: 1,
                },
                styleIconBox,
              ]}
            >
              <IconComp
                sx={{
                  color: iconColor || "#00679C",
                  fontSize: iconSize,
                  ...styleIcon,
                }}
              />
            </Box>
          );
        }

        return (
          <IconComp
            sx={{
              color: iconColor || "#00679C",
              fontSize: iconSize,
              ...styleIcon,
            }}
          />
        );
      })}
    </Stack>
  );
};

export default SocialIcons;
