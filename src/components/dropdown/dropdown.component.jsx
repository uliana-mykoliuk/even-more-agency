import { Select, MenuItem } from "@mui/material";

const Dropdown = ({ value, menuItems, onChange }) => {
	return (
		<Select value={value} onChange={onChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
			<MenuItem value="">
				<em>Filter by Region</em>
			</MenuItem>
			{menuItems.map((menuItem, index) => (
				<MenuItem value={menuItem} key={index}>
					{menuItem}
				</MenuItem>
			))}
		</Select>
	);
};

export default Dropdown;
