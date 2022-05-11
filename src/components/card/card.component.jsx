import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CardComponent = ({ name, flag, population, region, capital }) => {
	return (
		<Link to={`/country/${name}`}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia component="img" height="150" image={flag} alt={name} />
				<CardContent>
					<Typography variant="h5" component="div">
						{name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<strong>Population:</strong> {population}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<strong>Region:</strong> {region}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<strong>Capital:</strong> {capital}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
};

export default CardComponent;
