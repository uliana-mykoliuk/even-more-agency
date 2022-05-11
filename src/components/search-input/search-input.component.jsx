import { Search } from "@mui/icons-material";
import { Paper, IconButton, InputBase } from "@mui/material";

const SearchInput = ({ value, onChange }) => {
	return (
		<Paper
			component="form"
			sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, marginRight: "30px" }}
		>
			<IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
				<Search />
			</IconButton>
			<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for a country" value={value} onChange={onChange} />
		</Paper>
	);
};

export default SearchInput;
