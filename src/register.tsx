import "./main.css";


function SignUpForm() {
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
                            <h2 className="mb-4 text-2xl text-primary">Sign up</h2>
                            <div className="flex flex-row items-stretch justify-center w-full">
                                <input className="mb-4 mr-1 w-full p-2 border border-primary rounded-full" type="text" placeholder="First Name" required/>
                                <input className="mb-4 ml-1 w-full p-2 border border-primary rounded-full" type="text" placeholder="Last Name" required/>
                            </div>
                        <input className="mb-4 w-full p-2 border border-primary rounded-full" type="text"
                               placeholder="Username" required/>
                        <input className="mb-4 w-full p-2 border border-primary rounded-full" type="password"
                               placeholder="Password" required/>
                        <button className="w-1/2 p-2 bg-primary text-white rounded-full hover:bg-accent"
                                type="submit">Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignUpForm;



