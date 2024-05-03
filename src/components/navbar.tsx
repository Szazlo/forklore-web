import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../main.css'
import {useEffect, useState} from 'react';
import LogoShort from '@/components/logos/LogoShort.tsx';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

     // Listen for scroll event and animate the header appropriately
    useEffect(() => {
      return window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 30);
      });
  }, []);
    return (
        <nav className={`sticky top-0 flex justify-between items-center rounded-full py-1 mx-auto px-4 transition-all duration-200 ${scrolled ? "w-3/5 border border-accent backdrop-blur-sm top-1" : "w-full"}`}>
            <a className={`overflow-hidden transition-all ${scrolled ? "w-0" : ""}`} href="/"><img src="/logo.png" alt="Forklore logo" className="h-8" /></a>
          {scrolled && <LogoShort />}
            <ul className="flex mx-auto gap-8">
                <li><Link className={location.pathname=="/"?"underline decoration-primary decoration-4":""} to="/">Feed</Link></li>
                <li><Link className={location.pathname=="/recipes"?"underline decoration-primary decoration-4":""} to="/recipes">Recipes</Link></li>
                <li><Link className={location.pathname=="/tips"?"underline decoration-primary decoration-4":""} to="/tips">Cooking Tips</Link></li>
            </ul>
        {/*    TODO: Search component*/}
            <button className="btn bg-primary text-white py-2 px-4 rounded hover:bg-accent" onClick={()=>navigate("/login")}>Sign In</button>
        </nav>
    );
};

export default Navbar;
