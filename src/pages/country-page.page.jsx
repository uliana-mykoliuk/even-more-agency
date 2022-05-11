import React, { useState, useEffect } from "react";
import { Box, Button, Container, CardMedia, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useParams } from "react-router-dom";

import Layout from "../components/layout/layout.component";

const BorderButton = ({ code }) => {
	const [buttonData, setButtonData] = useState();

	useEffect(() => {
		fetch(`https://restcountries.com/v2/alpha/${code}`, {})
			.then(res => res.json())
			.then(response => {
				setButtonData(response);
				console.log(`https://restcountries.com/v2/alpha/${code}`);
			})
			.catch(error => console.log(error));
	}, [code]);

	return (
		buttonData && (
			<Button href={`${buttonData.name}`} variant="outlined" size="small" sx={{ margin: "5px" }}>
				{buttonData.name}
			</Button>
		)
	);
};

const CountryPage = () => {
	const { name } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState();

	console.log(name);

	useEffect(() => {
		fetch(`https://restcountries.com/v2/name/${name}`, {})
			.then(res => res.json())
			.then(response => {
				setData(response);
				setIsLoading(false);
			})
			.catch(error => console.log(error));
	}, [name]);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<Layout>
			{!isLoading && (
				<Container>
					<Button href="/" variant="outlined" startIcon={<ArrowBackOutlinedIcon />} sx={{ margin: "100px 0 50px 0" }}>
						Back to homepage
					</Button>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								md: "repeat(2, 1fr)",
							},
							gap: {
								xs: "30px",
								md: "60px",
							},
							marginBottom: "70px",
						}}
					>
						<CardMedia component="img" image={data[0].flag} alt={name} />
						<div>
							<Typography variant="h2" component="div">
								Name: {data[0].name}
							</Typography>
							<Box
								sx={{
									display: "grid",
									gridTemplateColumns: {
										md: "repeat(2, 1fr)",
									},
									gap: "30px",
									marginTop: "30px",
								}}
							>
								<div>
									<Typography variant="body" component="div">
										Native Name: {data[0].nativeName}
									</Typography>
									<Typography variant="body" component="div">
										Population: {data[0].population}
									</Typography>
									<Typography variant="body" component="div">
										Region: {data[0].region}
									</Typography>
									<Typography variant="body" component="div">
										Sub Region: {data[0].subregion}
									</Typography>
									<Typography variant="body" component="div">
										Capital: {data[0].capital}
									</Typography>
								</div>
								<div>
									<Typography variant="body" component="div">
										Top Level Domain:{" "}
										{data[0].topLevelDomain.map((item, index) => (
											<React.Fragment key={index}>{item},</React.Fragment>
										))}
									</Typography>

									<Typography variant="body" component="div">
										Currencies:{" "}
										{data[0].currencies.map((item, index) => (
											<React.Fragment key={index}>{item.name},</React.Fragment>
										))}
									</Typography>

									<Typography variant="body" component="div">
										Languages:{" "}
										{data[0].languages.map((item, index) => (
											<React.Fragment key={index}>{item.name},</React.Fragment>
										))}
									</Typography>
								</div>
							</Box>
							<Box
								sx={{
									display: "flex",
									marginTop: "30px",
									flexWrap: "wrap",
								}}
							>
								Border Countries:{" "}
								{data[0].borders?.map((item, index) => (
									<BorderButton code={item} key={index} />
								))}
							</Box>
						</div>
					</Box>
				</Container>
			)}
		</Layout>
	);
};

export default CountryPage;
