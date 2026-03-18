import { useNavigate } from "react-router-dom";
import "./App.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      
      <div className="welcome-content">

        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
        </p>

        <button
          className="create-account-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="login-btn-outline"
          onClick={() => navigate("/signin")}
        >
          Already Registered? Login
        </button>

      </div>

    </div>
  );
}

export default Welcome;