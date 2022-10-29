import React from "react";
import { Typography, Button, Stack } from "@mui/material";

const OnlineOffline = (props) => {
  const {
    online,
    onlineBarStyle,
    offlineBarStyle,
    titleStyle,
    onlineTitle,
    offlineTitle,
    reconnectBtn,
    reconnectBtnStyle,
  } = props;
  const barStyle = online ? onlineBarStyle : offlineBarStyle;

  return (
    <Stack
      sx={[
        {
          width: "100%",
          height: 50,
          backgroundColor: online ? "#adf8c0" : "#f29f9f",
          paddingLeft: 2,
          paddingRight: 2,
        },
        { barStyle },
      ]}
      alignItems="center"
      direction="row"
      justifyContent="space-between"
    >
      <Typography variant="p" component="div" sx={titleStyle}>
        {online
          ? onlineTitle || "Connect successfully"
          : offlineTitle || "Connection lost!"}
      </Typography>

      {!online && reconnectBtn && (
        <Button
          sx={[
            {
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 2,
              paddingRight: 2,
              borderRadius: 2,
            },
            reconnectBtnStyle,
          ]}
        >
          Reconnect
        </Button>
      )}
    </Stack>
  );
};

export default OnlineOffline;
