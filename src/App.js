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

//It can take some time to update DNS
//LEts create setup from react app
//Lets deploy this on vercel
//subdomain is ready
