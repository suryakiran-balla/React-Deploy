import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Signup from "./Signnup";
import Signin from "./Signin";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
