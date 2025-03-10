import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const links = [
	{ label: "Feed", to: "/" },
	{ label: "Recipes", to: "/recipes" },
	{ label: "Cooking Tips", to: "/tips" },
];

export default function MobileNavMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				id="mobile-nav-menu-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id="mobile-nav-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{ "aria-labelledby": "basic-button" }}
			>
				{links.map((link) => (
					<MenuItem
						onClick={handleClose}
						component={Link}
						to={link.to}
						key={link.to}
					>
						{link.label}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
