import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import '../main.css'
import {useSelector} from 'react-redux';
import {selectUser} from "@/store";
import {Avatar, IconButton} from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectUser);

  return (
      <nav className="flex justify-between items-center w-screen h-min pt-2 px-4">
        <img src="/logo.png" alt="Forklore logo" className="h-8" onClick={() => navigate("/")}/>
        <ul className="flex">
          <li className="p-4"><Link className={location.pathname == "/" ? "underline" : ""} to="/">Feed</Link></li>
          <li className="p-4"><Link className={location.pathname == "/recipes" ? "underline" : ""}
                                    to="/recipes">Recipes</Link></li>
          <li className="p-4"><Link className={location.pathname == "/tips" ? "underline" : ""} to="/tips">Cooking
            Tips</Link></li>
        </ul>
        {/* TODO: Search component*/}
        {user
            ?
            <IconButton>
              <Avatar src={user.photoURL || ""} alt={user.uid}/>
            </IconButton>
            : <button className="btn bg-primary py-2 px-4 rounded" onClick={() => navigate("/login")}>Sign In</button>
        }
      </nav>
  );
};

export default Navbar;
