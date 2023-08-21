import { Route, Routes } from "react-router-dom";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Login</h1>}></Route>
      <Route path="/register" element={<h1>Registe</h1>}></Route>
      <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
    </Routes>
  );
};
