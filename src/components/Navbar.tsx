import {Link, useLocation, useNavigate} from "react-router-dom";
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
        <nav
            className={`sticky top-0 flex justify-between items-center rounded-full mx-auto px-2.5 py-2.5 transition-all duration-200 ${scrolled ? "w-3/5 border border-accent backdrop-blur-sm top-1" : "w-full"}`}>
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
            <button className="btn border border-primary text-primary font-bold py-2 px-4 rounded hover:bg-gray-300"
                    onClick={() => navigate("/login")}>Log in
            </button>
        </nav>
    );
};

export default Navbar;
