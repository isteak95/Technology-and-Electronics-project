import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSignUpError("");

    if (password.length < 6) {
      setSignUpError("Password should be at least 6 characters long.");
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("Sign up successful!"); // Show a success toast
        })
        .catch((error) => {
          console.log(error);
          setSignUpError(error.message);
          toast.error("Sign up failed"); // Show an error toast
        });
    }
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[500px]">
            <h1 className="text-5xl font-bold text-center mt-14">Sign Up</h1>
            <form onSubmit={handleSignUp} className="h-[620px] w-[480px] card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="text"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label className="label">
                  <p>If you are already signed up</p>
                  <Link to="/signin">
                    <a href="#" className="label-text-alt link link-hover">
                      Sign In here ....
                    </a>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              {signUpError && (
                <div className="text-red-500 mt-4">{signUpError}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default SignUp;
