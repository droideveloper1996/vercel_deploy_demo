import { Route, Routes } from "react-router-dom";
import { Fallback } from "../components/fallback";

export const FallbackRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Fallback} />
    </Routes>
  );
};
