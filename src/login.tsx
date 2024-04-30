import "./main.css";

function LoginForm() {
    return (
        <div className="flex h-screen bg-primary">
            <div className="w-1/2 bg-secondary flex items-start justify-start p-4">
                <h1 className="text-primary text-3xl">Forklore</h1>
            </div>
            <div className="w-1/2 bg-white flex items-center justify-center">
                <div className="flex items-center justify-center h-screen">
                    <form className="flex flex-col w-4/5 max-w-lg mx-auto items-center">
                        <h2 className="mb-4 text-2xl text-primary">Login</h2>
                        <input className="mb-4 w-full p-2 border border-primary rounded-full" type="text" placeholder="Username" required />
                        <input className="mb-4 w-full p-2 border border-primary rounded-full" type="password" placeholder="Password" required />
                        <button className="w-1/2 p-2 bg-primary text-white rounded-full hover:bg-accent" type="submit">Submit</button>
                        <a className="mt-4 text-primary" href="#">Forgot Password?</a>
                        <div className="flex items-center w-full mt-4">
                            <hr className="flex-grow border-t border-secondary" />
                            <p className="mx-4 text-secondary">OR</p>
                            <hr className="flex-grow border-t border-secondary" />
                        </div>
                        <div className="flex w-full justify-center mt-4">
                            <button className="p-2 bg-primary text-white rounded-full hover:bg-accent" type="button">Facebook</button>
                            <button className="p-2 bg-primary text-white rounded-full hover:bg-accent" type="button">Google</button>
                            <button className="p-2 bg-primary text-white rounded-full hover:bg-accent" type="button">Microsoft</button>
                            <button className="p-2 bg-primary text-white rounded-full hover:bg-accent" type="button">Twitter</button>
                            <button className="p-2 bg-primary text-white rounded-full hover:bg-accent" type="button">Apple</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;