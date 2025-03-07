import { NavLink, useNavigate } from "react-router-dom";
import "@/main.css";
import { selectUser } from "@/store";
import { useSelector } from "react-redux";
import HeaderProfileButton from "./HeaderProfileButton";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import MobileNavMenu from "./MobileNavMenu";
import SearchIcon from "@mui/icons-material/Search";
import LogoShort from "./logos/LogoShort";

const links = [
	{ label: "Feed", to: "/" },
	{ label: "Recipes", to: "/recipes" },
	{ label: "Cooking Tips", to: "/tips" },
]

const Navbar = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Container maxWidth="lg">
			<AppBar color="transparent" sx={{ boxShadow: "none" }} position="static">
				<Toolbar className="flex justify-between" sx={{ px: 0.5 }}>
					<div className={"flex items-center"}>
						{isMobile && <MobileNavMenu />}
						<NavLink className="mr-10" to="/">
							{isMobile ? (
								<LogoShort />
							) : (
								<img src="/logo.png" alt="Forklore logo" className="h-8" />
							)}
						</NavLink>
						{/* Navbar links */}
						{!isMobile && (
							<Box sx={{ flexGrow: 1, display: "flex" }}>
								{links.map((link) => (
									<Button key={link.to} sx={{ color: "text.primary" }}>
										<NavLink to={link.to}>{link.label}</NavLink>
									</Button>
								))}
							</Box>
						)}
					</div>
					<Box>
						{isMobile && (
							// TODO: Add search box
							<IconButton size="large" aria-label="search">
								<SearchIcon />
							</IconButton>
						)}
						{user ? (
							<HeaderProfileButton />
						) : (
							<Button
								variant="outlined"
								sx={{ fontWeight: "bold" }}
								onClick={() => navigate("/signup")}
							>
								Sign up
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Container>
	);
};
export default Navbar;
