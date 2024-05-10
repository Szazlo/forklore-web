import "@/main.css";
import { auth } from "@/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch /* useSelector */ } from "react-redux";
// import { selectUser } from "./store";
import { login } from "@/store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {Button, TextField, Typography} from '@mui/material';

library.add(fab);

function LoginForm() {
	// Access current user with this
	// const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Signs the user in with google
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// Redirect to home page on success
				dispatch(login(result.user));
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="flex flex-col lg:flex-row h-screen bg-primary">
			<div className="bg-white items-center p-4 lg:hidden">
				<img
					src="/public/logo.png"
					alt="Forklore logo"
					className="h-10 mx-auto"
				/>
			</div>
			<div className="hidden lg:block lg:w-1/2 bg-secondary items-start justify-start p-4">
				<img
					src="/public/logo.png"
					alt="Forklore logo"
					className="hidden lg:block h-10"
				/>
			</div>
			<div className="w-full h-full lg:w-1/2 bg-white items-center">
				<div className="flex flex-col items-center justify-center mt-5 lg:mt-0 lg:h-screen">
					<Typography variant={"h3"} color={"primary"} gutterBottom>Log in</Typography>
					<form className="flex flex-col w-4/5 sm:w-1/2 mx-auto items-center">
						<TextField label="Username" required fullWidth margin={"normal"} InputProps={{ sx: { borderRadius: 7 }}}/>
						<TextField label="Password" required fullWidth margin={"dense"} InputProps={{ sx: { borderRadius: 7 }}}/>
						<div className={"w-full text-right"}>
							<Button variant={"text"} sx={{ textTransform: "capitalize"}}>
								Forgot Password?
							</Button>
						</div>
						<Button variant={"contained"} color={"primary"} sx={{ width: 150 }}>
							Log in
						</Button>
					</form>
					<a
						className="mt-4 text-primary hover:text-accent hover:underline"
						href="/signup"
					>
						Don't have an account? Sign up
					</a>
					<div className="flex justify-center items-center w-full mt-4">
						<hr className="w-1/4 border-t border-secondary" />
						<p className="mx-4 text-secondary">OR</p>
						<hr className="w-1/4 border-t border-secondary" />
					</div>
					<p className="mt-4 text-primary">Log in with:</p>
					<div className="flex w-full justify-center mt-4">
						<button className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
						</button>
						<button className="mx-2 login-icon">
							<FontAwesomeIcon
								icon={["fab", "google"]}
								onClick={signInWithGoogle}
								size="2x"
							/>
						</button>
						<button className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "microsoft"]} size="2x" />
						</button>
						<button className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
						</button>
						<a href="#" className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "apple"]} size="2x" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
