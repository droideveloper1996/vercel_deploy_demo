import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getApp } from "./utils/helper";
function App() {
  const CurrentApplication = getApp();

  return (
    <BrowserRouter>
      <div
        style={{
          height: "100vh",
        }}
      >
        <CurrentApplication />
      </div>
    </BrowserRouter>
  );
}

export default App;
