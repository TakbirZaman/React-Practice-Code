import { useState } from "react";
import "./App.css";

const App = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    gender: "",
    facebook: "",
    linkedin: "",
    github: "",
    website: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // Validate single field live
  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.trim() === "" ? "This field is required" : "";
      case "email":
        return /^\S+@\S+\.\S+$/.test(value) ? "" : "Enter a valid email address";
      case "phone":
        return /^[0-9]{10}$/.test(value) ? "" : "Phone number must be 10 digits";
      case "dob":
        return value ? "" : "Date of birth is required";
      case "address":
        return value.trim() === "" ? "Address is required" : "";
      case "city":
        return value ? "" : "Please select a city";
      case "gender":
        return value ? "" : "Please select your gender";
      case "facebook":
      case "linkedin":
      case "github":
        return value.startsWith("https://") ? "" : "Please enter a valid URL starting with https://";
      case "password":
        return value.length >= 6 ? "" : "Password must be at least 6 characters";
      case "confirmPassword":
        return value === form.password ? "" : "Passwords do not match";
      case "terms":
        return value ? "" : "You must accept the terms";
      default:
        return "";
    }
  };

  // Handle change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;

    setForm((prev) => ({ ...prev, [name]: fieldValue }));

    // Live validation
    setErrors((prev) => ({ ...prev, [name]: validateField(name, fieldValue) }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form submitted successfully!");
    console.log(form);
  };

  return (
    <div className="container" style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Professional Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <input
          placeholder="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
        <br />

        <input
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
        <br />

        {/* Email & Phone */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        <br />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
        <br />

        {/* Date of Birth & Address */}
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        {errors.dob && <div style={{ color: "red" }}>{errors.dob}</div>}
        <br />

        <textarea
          placeholder="Full Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        ></textarea>
        {errors.address && <div style={{ color: "red" }}>{errors.address}</div>}
        <br />

        {/* City */}
        <select name="city" value={form.city} onChange={handleChange}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Chittagong">Chittagong</option>
        </select>
        {errors.city && <div style={{ color: "red" }}>{errors.city}</div>}
        <br />

        {/* Gender */}
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={form.gender === "Male"}
          onChange={handleChange}
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={form.gender === "Female"}
          onChange={handleChange}
        /> Female
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={form.gender === "Other"}
          onChange={handleChange}
        /> Other
        {errors.gender && <div style={{ color: "red" }}>{errors.gender}</div>}
        <br />

        {/* Social Links */}
        <input
          type="url"
          placeholder="Facebook Profile Link"
          name="facebook"
          value={form.facebook}
          onChange={handleChange}
        />
        {errors.facebook && <div style={{ color: "red" }}>{errors.facebook}</div>}
        <br />

        <input
          type="url"
          placeholder="LinkedIn Profile Link"
          name="linkedin"
          value={form.linkedin}
          onChange={handleChange}
        />
        {errors.linkedin && <div style={{ color: "red" }}>{errors.linkedin}</div>}
        <br />

        <input
          type="url"
          placeholder="GitHub Profile Link"
          name="github"
          value={form.github}
          onChange={handleChange}
        />
        {errors.github && <div style={{ color: "red" }}>{errors.github}</div>}
        <br />

        <input
          type="url"
          placeholder="Personal Website (Optional)"
          name="website"
          value={form.website}
          onChange={handleChange}
        />
        <br />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        <br />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword}</div>}
        <br />

        {/* Terms */}
        <input
          type="checkbox"
          name="terms"
          checked={form.terms}
          onChange={handleChange}
        /> I agree to the Terms & Conditions
        {errors.terms && <div style={{ color: "red" }}>{errors.terms}</div>}
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;