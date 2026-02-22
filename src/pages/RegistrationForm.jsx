import { useState } from "react";
import "../styles/Forms.css";
import { useNavigate } from "react-router-dom";
import {
  cities,
  departments,
  experienceOptions,
  states,
} from "../lib/mockData";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { toast } from "react-toastify";

export default function RegistrationForm({ addUser }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    department: "",
    state: "",
    city: "",
    address: "",
    working: "yes",
    experience: [],
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        experience: checked
          ? [...prev.experience, value]
          : prev.experience.filter((e) => e !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: formData.fullName,
      email: formData.email,
      department: formData.department,
      role: "New Employee",
      phone: formData.contact,
      location: `${formData.city}, ${formData.state}`,
      address: formData.address,
      working: formData.working === "yes" ? "Yes" : "No",
      experience: formData.experience.join(", "),
    };

    addUser(newUser);
    toast.success("Registration successful!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  return (
    <div className="form-page">
      <div className="form-wrapper">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit} className="registration-form">
          {/* Name and Email */}
          <div className="form-row">
            <div className="form-group">
              <Input
                label={"Full Name"}
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <Input
                label={"Email Address"}
                type="email"
                id="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Contact and Department */}
          <div className="form-row">
            <div className="form-group">
              <Input
                label={"Contact Number"}
                type="tel"
                id="contact"
                name="contact"
                placeholder="Contact Number*"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department*</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* State and City */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State*</label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">State*</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">City*</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">City*</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          {/* Working Status */}
          <div className="form-group">
            <label>Currently Working or not</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="working"
                  value="yes"
                  checked={formData.working === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="working"
                  value="no"
                  checked={formData.working === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Experience Checkboxes */}
          <div className="form-group">
            <label>Years of Experience</label>
            <div className="checkbox-group">
              {experienceOptions.map((option) => (
                <label key={option} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.experience.includes(option)}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="btn-submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
