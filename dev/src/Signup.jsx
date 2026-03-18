import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidPassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{7,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Enter valid email ❌");
      return;
    }

    // Password validation
    if (!isValidPassword(form.password)) {
      alert(
        "Password must be >6 chars & contain letter, number & special char ❌"
      );
      return;
    }

    // GET existing users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find(
      (u) => u.email === form.email
    );

    if (userExists) {
      alert("User already exists with this email ❌");
      return;
    }

    //  Add new user
    users.push(form);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully 🎉");

    navigate("/signin");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        <h1>Create your PopX account</h1>

        <form onSubmit={handleSubmit}>

          <label>Full Name*</label>
          <input name="name" onChange={handleChange} required />

          <label>Phone number*</label>
          <input name="phone" onChange={handleChange} required />

          <label>Email address*</label>
          <input name="email" type="email" onChange={handleChange} required />

          <label>Password*</label>
          <input name="password" type="password" onChange={handleChange} required />

          <label>Company name</label>
          <input name="company" onChange={handleChange} />

          <p className="agency-label">Are you an Agency?*</p>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          <button className="create-btn">
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
}

export default Signup;