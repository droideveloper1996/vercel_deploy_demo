import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../components/home";
import demo2 from "../components/demo2";

export const DemoRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={demo2} />
    </Routes>
  );
};
