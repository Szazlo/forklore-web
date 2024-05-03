import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../main.css'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <nav className="flex justify-between items-center w-full h-16 px-5">
            <img src="/logo.png" alt="Forklore logo" className="h-8" onClick={()=>navigate("/")}/>
            <ul className="flex justify-between w-1/5">
                <li><Link className={location.pathname=="/"?"underline decoration-primary decoration-4":""} to="/">Feed</Link></li>
                <li className="mx-4"><Link className={location.pathname=="/recipes"?"underline decoration-primary decoration-4":""} to="/recipes">Recipes</Link></li>
                <li><Link className={location.pathname=="/tips"?"underline decoration-primary decoration-4":""} to="/tips">Cooking Tips</Link></li>
            </ul>
        {/*    TODO: Search component*/}
            <button className="btn bg-primary text-white py-2 px-4 rounded hover:bg-accent" onClick={()=>navigate("/login")}>Sign In</button>
        </nav>
    );
};

export default Navbar;
