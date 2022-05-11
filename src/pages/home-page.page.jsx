import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesFetch } from "../redux/actions/countries-actions";

import SearchInput from "../components/search-input/search-input.component";
import Dropdown from "../components/dropdown/dropdown.component";
import CardGrid from "../components/card-grid/card-grid.component";
import Layout from "../components/layout/layout.component";

const HomePage = () => {
	const dispatch = useDispatch();
	const countries = useSelector(state => state.countriesReducer.countries) || [];

	const [filteredResults, setFilteredResults] = useState([]);
	const [regions, setRegions] = useState([]);
	const [region, setRegion] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		dispatch(getCountriesFetch());
	}, [dispatch]);

	useEffect(() => {
		setSearchResults(countries);
		setFilteredResults(countries);
		const notUniqueRegions = [];
		countries?.forEach(item => notUniqueRegions.push(item.region));
		setRegions([...new Set(notUniqueRegions)]);
	}, [countries]);

	useEffect(() => {
		region ? setFilteredResults(countries.filter(country => country.region === region)) : setFilteredResults(countries);
	}, [region, countries]);

	useEffect(() => {
		setSearchResults(
			filteredResults.filter(country => country?.name?.toLowerCase().includes(searchTerm.toLowerCase())),
		);
	}, [searchTerm, filteredResults]);

	const handleChangeRegion = event => {
		setRegion(event.target.value);
	};

	const handleChangeInput = event => {
		setSearchTerm(event.target.value);
	};

	return (
		<Layout>
			<Container>
				{countries && (
					<>
						<Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", margin: "100px 0 50px 0" }}>
							<SearchInput value={searchTerm} onChange={handleChangeInput} />
							<Dropdown value={region} onChange={handleChangeRegion} menuItems={regions} />
						</Box>
						<CardGrid countries={searchResults} />
					</>
				)}
			</Container>
		</Layout>
	);
};

export default HomePage;
