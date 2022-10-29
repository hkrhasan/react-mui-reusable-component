import { createTheme, responsiveFontSizes } from "@mui/material";

export const customTheme = responsiveFontSizes(createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: "#00679C",
            light: "#0090C7",
            dark: "#004172",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#820007",
            light: "#A7160C",
            dark: "#610004",
            contrastText: "#FFFFFF",
        },
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
        fontSize: 14,
        lineHeight: 1,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: {
            fontSize: 32,
        },
        h2: {
            fontSize: 30,
        },
        h3: {
            fontSize: 28,
        },
        h4: {
            fontSize: 26,
        },
        h5: {
            fontSize: 24,
        },
        h6: {
            fontSize: 22,
        },

        subtitle1: {
            fontSize: 20,
        },
        // subtitle2: buildVariant(fontWeightLight, 14, 1.57, 0.1),
        body1: {
            fontSize: 18,
        },
        body2: {
            fontSize: 16,
        },
        button: {
            textTransform: 'none',
            // fontWeight: 600,
            fontSize: 16,
        },
        caption: {
            fontSize: 14,
        },
        overline: {
            fontSize: 12,
        },
        // caption: h6 as per our design
        // overline: buildVariant(fontWeightRegular, 12, 2.66, 1),
    },

    // overrides: {
    //     MuiButton: {
    //         root: {
    //             padding: '8px 16px',
    //         },
    //         containedSizeLarge: {
    //             fontSize: 24,
    //         },
    //     },
    // },

}))