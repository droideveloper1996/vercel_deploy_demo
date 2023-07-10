import { Route, Routes } from "react-router-dom";
import { AdminComponent } from "../components/admin";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={AdminComponent} />
    </Routes>
  );
};
