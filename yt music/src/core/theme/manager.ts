import { createTheme } from "@mui/material";
import { darkThemeTypography, lightThemeTypography } from "./typography";


const lightTheme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: 'red'
                }
            }
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#030303',
            dark: '#030303'
        },
        secondary: {
            main: "#030303",
            dark: "#030303"
        },
        text: {
            primary: '#030303',
            // secondary: 'rgb(255,255,255,0.7)'
        }
    },
    typography: lightThemeTypography
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#030303',
            default: '#212121'
            // 'rgba(255, 255, 255, 0.1)'
        },
        primary: {
            main: '#030303',
            dark: '#030303'
        },
        secondary: {
            main: "#030303",
            dark: "#030303"
        },
        text: {
            primary: '#fff',
            secondary: 'rgb(255,255,255,0.7)'
        },
    },
    typography: darkThemeTypography
})

export const theme = (type: 'light' | 'dark') => type === 'light' ? lightTheme : darkTheme;