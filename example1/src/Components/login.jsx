import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [isSignup, setIsSignup] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!username || !password) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            setLoading(true);

            const endpoint = isSignup
                ? "http://localhost:5000/api/auth/signup"
                : "http://localhost:5000/api/auth/login";

            const res = await axios.post(endpoint, { username, password });

            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");

        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="loginPage">
            <h1>{isSignup ? "Sign Up" : "Login"}</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? "Please wait..." : isSignup ? "Sign Up" : "Login"}
                </button>
            </form>

            <p
                onClick={() => setIsSignup(!isSignup)}
                style={{ cursor: "pointer", color: "blue" }}
            >
                {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
            </p>
        </div>
    );
}