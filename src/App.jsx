import { Route, Routes } from "react-router-dom";
import ProjectListPage from "./pages/PRojectListPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
      </Routes>
    </>
  );
}

export default App;
