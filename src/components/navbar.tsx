import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import '../main.css'
import {useSelector} from 'react-redux';
import {selectUser} from "@/store";
import {Avatar, IconButton, useTheme } from '@mui/material';
import useColorMode from "@/context/ColorModeProvider";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import LogoShort from "./logos/LogoShort";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useColorMode();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectUser);

  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll event and animate the header appropriately
  useEffect(() => {
    const scrollListener = window.addEventListener('scroll' , () => {
      setScrolled(window.scrollY > 30);
    })
    return scrollListener;
  }, []);

  return (
      <nav className={`sticky top-0 flex justify-between items-center rounded-full py-1 mx-auto px-4  transition-all duration-200 ${scrolled ? "w-3/5 bg-gray-200 border border-slate-500 backdrop-blur-sm top-1" : "w-full"}`}>
        {scrolled ?
          <LogoShort />
        : 
          <a href="/"><img src="/logo.png" alt="Forklore logo" className="h-8" /></a>
        }
        <ul className="flex">
          <li className="p-4"><Link className={location.pathname == "/" ? "underline" : ""} to="/">Feed</Link></li>
          <li className="p-4"><Link className={location.pathname == "/recipes" ? "underline" : ""}
                                    to="/recipes">Recipes</Link></li>
          <li className="p-4"><Link className={location.pathname == "/tips" ? "underline" : ""} to="/tips">Cooking
            Tips</Link></li>
        </ul>
        <Box>
        {/* TODO: Search component*/}
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {user
              ?
              <IconButton color="primary">
                <Avatar sx={{ bgcolor: "primary.main" }} src={user.photoURL || ""} alt={user.uid}/>
              </IconButton>
              : <button className="btn bg-primary py-2 px-4 rounded" onClick={() => navigate("/login")}>Sign In</button>
            }
          </Box>
      </nav>
  );
};

export default Navbar;
