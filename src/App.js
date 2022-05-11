import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page.page";
import CountryPage from "./pages/country-page.page";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/country/:name" element={<CountryPage />} />
		</Routes>
	);
}

export default App;
