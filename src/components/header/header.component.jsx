import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = ({ onClick, label }) => {
	return (
		<AppBar position="fixed" color="secondary">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Where in the world?
				</Typography>
				<Button variant="outlined" startIcon={<DarkModeOutlinedIcon />} onClick={onClick}>
					{label} Mode
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
