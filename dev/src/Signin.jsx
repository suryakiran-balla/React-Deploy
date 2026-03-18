import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Signin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      alert("Invalid email or password ❌");
      return;
    }

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(user)
    );

    navigate("/home");
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1>Signin to your PopX account</h1>

        <form
          onSubmit={handleLogin}
          autoComplete="off"
        >

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            autoComplete="off"
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            autoComplete="new-password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button className="login-btn">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signin;