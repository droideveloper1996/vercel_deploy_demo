import { Route, Routes } from "react-router-dom";
import { StudentComponent } from "../components/students";

export const StudentRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={StudentComponent} />
    </Routes>
  );
};
