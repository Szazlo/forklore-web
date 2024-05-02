import "./main.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
// import { selectUser } from "./store";

library.add(fab)



function SignUpForm() {
    return (
        <div className="lg:flex h-screen bg-primary">
            <div className="w-full bg-white flex items-start justify-start p-4 lg:hidden">
                <img src='/logo.png' alt="Forklore logo" className="h-10 mx-auto"/>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-secondary flex items-start justify-start p-4">
                <img src='/logo.png' alt="Forklore logo" className="hidden lg:block h-10"/>
            </div>
            <div className="w-full lg:w-1/2 bg-white items-center">
                <div className="flex flex-col items-center justify-center h-screen">
                    <form className="flex flex-col w-3/5 max-w-lg mx-auto items-center">
                        <h2 className="mb-4 text-2xl text-primary">Sign up</h2>
                        <div className="flex flex-row items-stretch justify-center w-full">
                            <input className="mb-4 mr-1 px-4 py-2 w-full p-2 border border-primary rounded-full" type="text"
                                   placeholder="First Name" required/>
                            <input className="mb-4 ml-1 px-4 py-2 w-full p-2 border border-primary rounded-full" type="text"
                                   placeholder="Last Name" required/>
                        </div>
                        <input className="mb-4 w-full px-4 py-2 border border-primary rounded-full" type="text"
                               placeholder="Username" required/>
                        <input className="mb-4 w-full px-4 py-2 border border-primary rounded-full" type="password"
                               placeholder="Password" required/>
                        <button className="w-1/2 p-2 bg-primary text-white rounded-full hover:bg-accent"
                                type="submit">Sign up
                        </button>
                    </form>
                    <a className="mt-4 text-primary hover:text-accent hover:underline" href="/login">Already have an account? Sign in</a>
                        <div className="flex justify-center items-center w-full mt-4">
                            <hr className="w-1/4 border-t border-secondary"/>
                            <p className="mx-4 text-secondary">OR</p>
                            <hr className="w-1/4 border-t border-secondary"/>
                        </div>
                        <p className="mt-4 text-primary">Sign Up with:</p>
                        <div className="flex w-full justify-center mt-4">
                            <button className="mx-2 login-icon">
                                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>
                            </button>
                            <button className="mx-2 login-icon">
                                <FontAwesomeIcon icon={['fab', 'google']} size="2x"/>
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
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;



