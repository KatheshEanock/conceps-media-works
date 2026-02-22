import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/google.png";
import appleIcon from "../assets/apple.png";
import "../styles/Auth.css";
import Input from "../components/input/Input";
import PasswordInput from "../components/passwordInput/PasswordInput";
import Button from "../components/button/Button";
import { toast } from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      toast.error("No account found. Please sign up first.");

      return;
    }

    if (
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      toast.success("OTP sent successfully!");
      navigate("/otp");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Sign in</h1>
          <p className="auth-subtext">
            Need an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

        <div className="oauth-buttons">
          <button className="oauth-btn google-btn">
            <span className="google-icon">
              <img
                className="google-icon-img"
                src={googleIcon}
                alt="Google Icon"
              />
            </span>
            Use Google
          </button>
          <button className="oauth-btn apple-btn">
            <span className="apple-icon">
              <img
                className="apple-icon-img"
                src={appleIcon}
                alt="Apple Icon"
              />
            </span>
            Use Apple
          </button>
        </div>

        <div className="divider">OR</div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-link">
                Forgot Password?
              </a>
            </div>
            <PasswordInput
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkbox-flex">
            <Input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe" className="checkbox-label">
              Remember me
            </label>
          </div>

          <Button
            type="submit"
            className="btn-primary"
            style={{
              width: "100%",
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
