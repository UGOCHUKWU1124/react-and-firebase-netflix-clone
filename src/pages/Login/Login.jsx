    import "./Login.css";
    import logo from "../../assets/logo.png";
    import { useState } from "react";
    import { login, signUp } from "../../firebase";
    import netflix_spinner from "../../assets/netflix_spinner.gif"

    const Login = () => {
    //variable name and function name
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email,setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    //user authenticatio function
    const user_auth = async (event) => {
        //not reload the page whenever the form is filled
        event.preventDefault();
        setLoading(true);
        if (signState === "Sign In") {
        await login(email, password);
        } else {
        await signUp(name, email, password);
        }
        setLoading(false);
    }

    return (
        loading?<div className="loading-spinner">
            <img src={netflix_spinner} alt="" />
        </div>:
        <div className="login">
        <img src={logo} className="login-logo" alt="" />
        <div className="login-form">
            <h1>{signState}</h1>
            <form>
            {signState === "Sign Up" ? (
                <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                type="text"
                placeholder="Your name"
                required
                />
            ) : (
                <></>
            )}
            <input
                value={email}
                onChange={(e) => {
                setEmail(e.target.value)
                }}
                type="email"
                placeholder="Email"
                required
            />
            <input
                value={password}
                onChange={(e) => {
                setPassword(e.target.value)
                }}
                type="password"
                placeholder="password"
                required
            />
            <button onClick={user_auth}  type="submit">
                {signState}
            </button>
            <div className="form-help">
                <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
                </div>
                <p>Need Help?</p>
            </div>
            </form>
            <div className="form-switch">
            {signState === "Sign In" ? (
                <p>
                New to Netflix?{" "}
                <span
                    onClick={() => {
                    setSignState("Sign Up");
                    }}
                >
                    Sign Up Now
                </span>
                </p>
            ) : (
                <p>
                Already Have account?
                <span
                    onClick={() => {
                    setSignState("Sign In");
                    }}
                >
                    Sign In Now
                </span>
                </p>
            )}
            </div>
        </div>
        </div>
    );
    };

    export default Login;
