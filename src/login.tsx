import "./main.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function LoginForm() {
    return (
        <div className="lg:flex h-screen bg-primary">
            <div className="w-full bg-white flex items-start justify-start p-4 lg:hidden">
                <img src='/public/logo.png' alt="Forklore logo" className="h-10 mx-auto"/>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-secondary flex items-start justify-start p-4">
                <img src='/public/logo.png' alt="Forklore logo" className="hidden lg:block h-10"/>
            </div>
            <div className="w-full lg:w-1/2 bg-white flex items-center justify-center">
                <div className="flex items-center justify-center h-screen">
                    <form className="flex flex-col w-4/5 max-w-lg mx-auto items-center">
                        <h2 className="mb-4 text-2xl text-primary">Login</h2>
                        <input className="mb-4 w-full p-2 border border-primary rounded-full" type="text"
                               placeholder="Username" required/>
                        <input className="mb-4 w-full p-2 border border-primary rounded-full" type="password"
                               placeholder="Password" required/>
                        <button className="w-1/2 p-2 bg-primary text-white rounded-full hover:bg-accent"
                                type="submit">Submit
                        </button>
                        <a className="mt-4 text-primary" href="#">Forgot Password?</a>
                        <div className="flex items-center w-full mt-4">
                            <hr className="flex-grow border-t border-secondary"/>
                            <p className="mx-4 text-secondary">OR</p>
                            <hr className="flex-grow border-t border-secondary"/>
                        </div>
                        <p className="mt-4 text-primary">Login with:</p>
                        <div className="flex w-full justify-center mt-4">
                            <a href="/auth/facebook" className="mx-2">
                                <FontAwesomeIcon icon={['fab', 'facebook']} color="var(--primary)" size="2x"/>
                            </a>
                            <a href="/auth/google" className="mx-2">
                                <FontAwesomeIcon icon={['fab', 'google']} color="var(--primary)" size="2x"/>
                            </a>
                            <a href="/auth/github" className="mx-2">
                                <FontAwesomeIcon icon={['fab', 'microsoft']} color="var(--primary)" size="2x"/>
                            </a>
                            <a href="/auth/twitter" className="mx-2">
                                <FontAwesomeIcon icon={['fab', 'twitter']} color="var(--primary)" size="2x"/>
                            </a>
                            <a href="/auth/apple" className="mx-2">
                                <FontAwesomeIcon icon={['fab', 'apple']} color="var(--primary)" size="2x"/>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;