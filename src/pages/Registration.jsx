import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Registration = () => {
  const navigate = useNavigate();

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
        return value.startsWith("https://")
          ? ""
          : "Please enter a valid URL starting with https://";
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setForm((prev) => ({ ...prev, [name]: fieldValue }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Navigate to profile and pass data
    navigate("/profile", { state: form });
  };

  return (
    <div className="container" style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Professional Registration Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        <input
          placeholder="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}

        <input
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;