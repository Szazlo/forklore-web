import { selectUser } from "@/store";
import { logout } from "@/store/auth/authSlice";
import Logout from "@mui/icons-material/Logout";
import {
	Avatar,
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
} from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useSnack from "@/context/SnackbarProvider";

export default function HeaderProfileButton() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const { addSnack } = useSnack();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSignOut = () => {
		dispatch(logout());
		addSnack("Signed out", "success");
		handleClose();
	};

	return (
		<>
			<Tooltip title="Account settings">
				<IconButton onClick={handleClick}>
					<Avatar src={""} alt={"Profile Image"}></Avatar>
				</IconButton>
			</Tooltip>
			<ProfileMenu anchorEl={anchorEl} handleClose={handleClose}>
				<MenuItem onClick={handleClose}>
					<Avatar /> {user?.firstName || user?.email}
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleSignOut}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</ProfileMenu>
		</>
	);
}

interface ProfileMenuProps {
	children: React.ReactNode;
	anchorEl: HTMLElement | null;
	handleClose: () => void;
}

function ProfileMenu({ children, anchorEl, handleClose }: ProfileMenuProps) {
	const open = Boolean(anchorEl);
	return (
		<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&::before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				{children}
				</Menu>
	);
}
