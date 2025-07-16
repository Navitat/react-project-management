import { Route, Routes } from "react-router-dom";
import ProjectListPage from "./pages/PRojectListPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/create" element={<CreateProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
