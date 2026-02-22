import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/google.png";
import appleIcon from "../assets/apple.png";
import "../styles/Auth.css";
import Input from "../components/input/Input";
import PasswordInput from "../components/passwordInput/PasswordInput";
import Button from "../components/button/Button";
import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
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
    if (
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.acceptTerms
    ) {
      if (formData.password === formData.confirmPassword) {
        const newUser = {
          email: formData.email,
          password: formData.password,
        };

        localStorage.setItem("user", JSON.stringify(newUser));
        toast.success("Account created successfully!");
        setTimeout(() => navigate("/otp"), 2000);
        navigate("/otp");
      } else {
        toast.error("Passwords do not match");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Sign up</h1>
          <p className="auth-subtext">
            Already have an Account? <Link to="/signin">Sign in</Link>
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
            <label htmlFor="password">Password</label>
            <PasswordInput
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkbox-flex">
            <Input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptTerms" className="checkbox-label">
              I accept <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <Button
            type="submit"
            className="btn-primary"
            style={{
              width: "100%",
            }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
