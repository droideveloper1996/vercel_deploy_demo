import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../components/home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
};
