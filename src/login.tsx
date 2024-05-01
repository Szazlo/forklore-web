import "./main.css";
import { auth } from "./firebase";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./store";
import { login } from "./store/auth/authSlice";
import { useNavigate } from "react-router-dom";

library.add(fab)

function LoginForm() {
		// Access current user with this
		const user = useSelector(selectUser);
		const dispatch = useDispatch();
		const navigate = useNavigate();

    // Signs the user in with google
    const signInWithGoogle = () => {
			const provider = new GoogleAuthProvider();
			signInWithPopup(auth, provider)
				.then(result => {
					// Redirect to home page on success
					dispatch(login(result.user));
					navigate('/');
				})
				.catch(err => {
					console.log(err);
				})
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-primary">
            <div className="bg-white items-center p-4 lg:hidden">
                <img src='/public/logo.png' alt="Forklore logo" className="h-10 mx-auto"/>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-secondary items-start justify-start p-4">
                <img src='/public/logo.png' alt="Forklore logo" className="hidden lg:block h-10"/>
            </div>
            <div className="w-full lg:w-1/2 bg-white items-center">
                <div className="flex items-center justify-center h-screen">
                    <form className="flex flex-col w-4/5 max-w-lg mx-auto w-3/5 items-center">
                        <h2 className="mb-4 text-2xl text-primary">Login</h2>
                        <input className="mb-4 w-2/3 p-2 border border-primary rounded-full" type="text"
                               placeholder="Username" required/>
                        <input className="mb-4 w-2/3 p-2 border border-primary rounded-full" type="password"
                               placeholder="Password" required/>
                        <button className="w-1/2 p-2 bg-primary text-white rounded-full hover:bg-accent"
                                type="submit">Submit
                        </button>
                        <a className="mt-4 text-primary hover:text-accent hover:underline" href="#">Forgot Password?</a>
                        <div className="flex items-center w-full mt-4">
                            <hr className="flex-grow border-t border-secondary"/>
                            <p className="mx-4 text-secondary">OR</p>
                            <hr className="flex-grow border-t border-secondary"/>
                        </div>
                        <p className="mt-4 text-primary">Login with:</p>
                        <div className="flex w-full justify-center mt-4">
                            <button className="mx-2 login-icon" >
                                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>
                            </button>
                            <button className="mx-2 login-icon">
                                <FontAwesomeIcon icon={['fab', 'google']} onClick={signInWithGoogle} size="2x"/>
                            </button>
                            <button className="mx-2 login-icon">
                                <FontAwesomeIcon icon={['fab', 'microsoft']} size="2x"/>
                            </button>
                            <button className="mx-2 login-icon">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                            </button>
                            <a href="#" className="mx-2 login-icon">
                                <FontAwesomeIcon icon={['fab', 'apple']} size="2x"/>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;