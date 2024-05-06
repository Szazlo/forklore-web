import {Link, useLocation, useNavigate} from "react-router-dom";
import '../main.css'
import React, {useEffect, useState} from 'react';
import LogoShort from '@/components/logos/LogoShort.tsx';
import { selectUser } from "@/store";
import { useSelector } from "react-redux";
import {Avatar, IconButton} from "@mui/material";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const user = useSelector(selectUser);

    // Listen for scroll event and animate the header appropriately
    useEffect(() => {
        return window.addEventListener('scroll', () => {
            setScrolled(window.scrollY > 30);
        });
    }, []);
    return (
        <nav
            className={`sticky top-0 flex justify-between items-center rounded-full mx-auto px-2.5 py-2.5 transition-all duration-200 ${scrolled ? "w-3/5 border border-accent bg-white/[0.5] backdrop-blur-lg top-1" : "w-full"}`}>
            <div className={'flex items-center'}>
                <div className={'mr-10'}>
                    {scrolled
                        ? <LogoShort/>
                        : <a className={`transition-all ${scrolled ? "w-0" : ""}`} href="/"><img src="/logo.png"
                                                                                                 alt="Forklore logo"
                                                                                                 className="h-8"/></a>
                    }
                </div>
                <ul className="flex gap-5">
                    <li><Link className={location.pathname == "/" ? "underline decoration-primary decoration-4" : ""}
                              to="/">Feed</Link></li>
                    <li><Link
                        className={location.pathname == "/recipes" ? "underline decoration-primary decoration-4" : ""}
                        to="/recipes">Recipes</Link></li>
                    <li><Link
                        className={location.pathname == "/tips" ? "underline decoration-primary decoration-4" : ""}
                        to="/tips">Cooking Tips</Link></li>
                </ul>
            </div>
            {/*    TODO: Search component*/}
            {user
                ? <IconButton onClick={AccountMenu}><Avatar src={user.photoURL || ""} alt={'Profile Image'}></Avatar></IconButton>
                : <button className={`btn border border-primary text-primary font-bold py-2 px-4 hover:bg-gray-300 ${scrolled ? "rounded-full" : "rounded"}`}
                          onClick={() => navigate("/signup")}>Sign up
                </button>
            }
        </nav>
    );
};

function AccountMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default Navbar;
