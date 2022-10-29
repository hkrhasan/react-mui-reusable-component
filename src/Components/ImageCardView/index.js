import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { defaultImage } from "../../constant";

export default function ImageCardView(props) {
  const {
    imageHeight,
    imgSrc,
    alt,
    imgName,
    onDelete,
    showImageDetails,
    stackStyle,
    titleStyle,
    iconStyle,
    ...remain
  } = props;

  return (
    <Card sx={{ width: 300 }} {...remain}>
      {imgSrc ? (
        <CardActionArea>
          <CardMedia
            component="img"
            height={imageHeight || "400"}
            image={imgSrc}
            alt={alt}
          />

          {showImageDetails && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={[{ padding: 1 }, stackStyle]}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={titleStyle}
              >
                {imgName}
              </Typography>
              <DeleteIcon sx={iconStyle} onClick={onDelete} />
            </Stack>
          )}
        </CardActionArea>
      ) : (
        <Box
          sx={{
            height: imageHeight,
            with: imageHeight - 50,
            backgroundColor: "grey",
          }}
        />
      )}
    </Card>
  );
}

// export default function ImageCardView(props) {
//   const { imageHeight, imgSrc, alt, ...remain } = props;

//   return (
//     <Card {...remain}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height={imageHeight || "400"}
//           image={imgSrc || defaultImage}
//           alt={alt}
//         />
//       </CardActionArea>
//     </Card>
//   );
// }
