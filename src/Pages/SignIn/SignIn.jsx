import { useContext, useState } from "react";
import auth from "../../Firebase/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const [signInError, setSignInError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        toast.success("Sign in with Google successful!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google Sign-In failed");
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSignInError("");
    setEmailError("");
    setPasswordError("");

    signIn(auth, email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Sign-In successful!");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email" || error.code === "auth/user-not-found") {
          setEmailError("Email doesn't match.");
          toast.error("Email doesn't match.");
        } else if (error.code === "auth/wrong-password") {
          setPasswordError("Password doesn't match.");
          toast.error("Password doesn't match.");
        } else {
          setSignInError(error.message);
          toast.error(error.message);
        }
      });
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* Additional content */}
          </div>
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[500px]">
            <h1 className="text-5xl font-bold text-center mt-14">Sign In</h1>
            <form onSubmit={handleSignIn} className="h-[600px] w-[490px] card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
                {emailError && (
                  <div className="text-red-500 mt-2">{emailError}</div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                {passwordError && (
                  <div className="text-red-500 mt-2">{passwordError}</div>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <NavLink to="/signup">
                    <a  className="label-text-alt link link-hover">
                      Sign Up
                    </a>
                  </NavLink>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleGoogleSignIn} className="btn btn-google">
                  Sign In with Google
                </button>
              </div>
              {signInError && (
                <div className="text-red-500 mt-4">{signInError}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default SignIn;