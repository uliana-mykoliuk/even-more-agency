import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../header/header.component";

const Layout = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? "dark" : "light",
					secondary: {
						light: "#ffffff",
						main: "#ffffff",
						dark: "##424242",
					},
				},
			}),
		[darkMode],
	);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header onClick={toggleTheme} label={darkMode ? "Light" : "Dark"} />
			{children}
		</ThemeProvider>
	);
};

export default Layout;
