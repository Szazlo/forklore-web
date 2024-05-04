import { Link } from "react-router-dom";
import '../main.css'

const Footer = () => {
    return (
        <nav className="flex justify-between mx-20 pb-10 pt-5">
            <div className="flex flex-col w-36">
                <img src="/logo.png" alt="Forklore logo" className="w-full h-auto flex-none"/>
                <p className="mt-1 text-accent">Just fork it.</p>
            </div>
            <ul className="flex flex-col mx-4">
                <li className="pb-2 font-bold">Products</li>
                <li className="pb-2"><Link className={"hover:text-accent"} to="/">Feed</Link></li>
                <li className="pb-2"><Link className={"hover:text-accent"} to="/recipes">Recipes</Link></li>
                <li><Link className={"hover:text-accent"} to="/tips">Cooking Tips</Link></li>
            </ul>
            <ul className="flex flex-col mx-4">
                <li className="pb-2 font-bold">Company</li>
                <li className="pb-2"><Link className={"hover:text-accent"} to="/about">About us</Link></li>
                <li className="pb-2"><Link className={"hover:text-accent"} to="/contact">Contact</Link></li>
                <li><Link className={"hover:text-accent"} to="/news">News</Link></li>
            </ul>
            <ul className="flex flex-col mx-4">
                <li className="pb-2 font-bold">Resources</li>
                <li className="pb-2"><Link className={"hover:text-accent"} to="/faq">FAQ</Link></li>
                <li className="pb-2"><Link className={"hover:text-accent"} to="/blog">Blog</Link></li>
                <li><Link className={"hover:text-accent"} to="/tips">Tips</Link></li>
            </ul>
            <form className="flex flex-col w-1/4">
                <p className="mb-2 font-bold">Stay up to date</p>
                <input className="mb-4 w-full p-2 border border-primary rounded-2xl" type="text"
                       placeholder="Email" required/>
                <button className="w-full p-2 bg-primary text-white rounded-xl hover:bg-accent"
                        type="submit">Subscribe
                </button>
            </form>
        </nav>
    );
};

export default Footer;