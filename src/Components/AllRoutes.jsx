import { Routes, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<h1>"Not Found"</h1>} />
    </Routes>
  );
};

export default AllRoutes;
