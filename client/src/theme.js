import {createTheme, responsiveFontSizes} from "@mui/material";

const layout = {
	typography: {
		fontFamily: `"Poppins", sans-serif`
	}, components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: "none", borderRadius: 0, borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
				}
			}
		}, MuiButtonGroup: {
			styleOverrides: {
				root: {
					boxShadow: "none"
				}
			}
		}, MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none"
				}, contained: {
					paddingLeft: 32, paddingRight: 32, boxShadow: "none"
				}
			}
		}, MuiCard: {
			styleOverrides: {
				root: {
					padding: "16px", // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
					borderRadius: 12, border: "1px solid rgba(0, 0, 0, 0.1)"
				}
			}
		}, MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 12, boxShadow: "none"
				}
			}
		}
	}
};

export const lightTheme = responsiveFontSizes(createTheme({
	palette: {
		mode: "light", primary: {
			main: "#2F80ED"
		}, secondary: {
			main: "#fff"
		}, info: {
			main: "#000"
		}
	}, ...layout
}));

export const darkTheme = responsiveFontSizes(createTheme({
	palette: {
		mode: "dark", primary: {
			main: "#2F80ED"
		}, secondary: {
			main: "#fff"
		}, info: {
			main: "#000"
		}
	}, ...layout
}));