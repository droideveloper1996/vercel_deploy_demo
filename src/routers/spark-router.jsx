import { Route, Routes } from "react-router-dom";
import SparkScreen from "../components/spark";

export const SparkRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={SparkScreen} />
    </Routes>
  );
};
