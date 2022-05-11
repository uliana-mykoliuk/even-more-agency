import Card from "../card/card.component";
import { Box } from "@mui/material";

const CardGrid = ({ countries }) => {
	return (
		<Box
			sx={{
				gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
				display: "grid",
				gap: "30px",
				justifyItems: { xs: "center", sm: "stretch" },
			}}
		>
			{countries.map((item, index) => (
				<Card
					key={index}
					name={item.name}
					flag={item.flag}
					population={item.population}
					region={item.region}
					capital={item.capital}
				/>
			))}
		</Box>
	);
};

export default CardGrid;
