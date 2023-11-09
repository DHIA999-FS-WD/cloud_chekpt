import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import ReadAboutUs from "./pages/ReadAboutUs";
import VisitUs from "./pages/VisitUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUS" element={<ReadAboutUs />} />
          <Route path="/visitUs" element={<VisitUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
