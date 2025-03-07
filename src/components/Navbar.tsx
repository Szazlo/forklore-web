import { Link, useLocation, useNavigate } from "react-router-dom";
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
import LinksDrawer from "./LinksDrawer";
import SearchIcon from "@mui/icons-material/Search";
import LogoShort from "./logos/LogoShort";

const Navbar = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	const user = useSelector(selectUser);
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Container maxWidth="lg">
			<AppBar
				color="transparent"
				sx={{ boxShadow: "none" }}
				position="static"
			>
				<Toolbar
					className="flex justify-between"
					sx={{ px: 0.5 }}
				>
					<div className={"flex items-center"}>
						{isMobile && <MobileNavMenu />}
						<NavLink className="mr-10" to="/">
							{isMobile ? (
								<LogoShort />
							) : (
								<img
									src="/logo.png"
									alt="Forklore logo"
									className="h-8"
								/>
							)}
						</Link>
						{!isMobile && (
							<ul className="flex gap-5 mx-auto">
								<li>
									<Link
										className={
											location.pathname == "/"
												? "underline decoration-primary decoration-4"
												: ""
										}
										to="/"
									>
										Feed
									</Link>
								</li>
								<li>
									<Link
										className={
											location.pathname == "/recipes"
												? "underline decoration-primary decoration-4"
												: ""
										}
										to="/recipes"
									>
										Recipes
									</Link>
								</li>
								<li>
									<Link
										className={
											location.pathname == "/tips"
												? "underline decoration-primary decoration-4"
												: ""
										}
										to="/tips"
									>
										Cooking Tips
									</Link>
								</li>
							</ul>
						)}
					</div>
					<Box>
						{isMobile && (
							// TODO: Add search box
							<IconButton
								size="large"
								aria-label="search"
							>
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
