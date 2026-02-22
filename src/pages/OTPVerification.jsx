import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import phoneSVG from "../assets/smartphone.svg";
import "../styles/Auth.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { toast } from "react-toastify";

export default function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(37);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    const otpString = otp.join("");
    if (otpString.length === 6) {
      toast.success("OTP verified successfully!");
      navigate("/dashboard");
    }
  };

  const handleResend = () => {
    setTimeLeft(37);
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <div className="auth-page">
      <div className="auth-container otp-container">
        <div className="otp-icon">
          <img src={phoneSVG} alt="Phone Icon" />
        </div>

        <h1 className="text-center">Verify your phone</h1>

        <p className="otp-text">
          Enter the verification code we sent to
          <br />
          <span className="otp-number">*******7859</span>
        </p>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`otp-input ${index === 2 ? "focused" : ""}`}
              maxLength="1"
            />
          ))}
        </div>

        <div className="otp-timer">
          <p>
            Didn't receive a code? ({timeLeft}s){" "}
            <a type="button" className="resend-btn" onClick={handleResend}>
              Resend
            </a>
          </p>
        </div>

        <Button
          className="btn-primary"
          onClick={handleContinue}
          disabled={otp.join("").length !== 6}
          style={{
            width: "100%",
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
