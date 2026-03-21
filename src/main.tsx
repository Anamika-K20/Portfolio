import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ResumePage from "./pages/ResumePage";
import EducationPage from "./pages/EducationPage";
import ExtracurricularPage from "./pages/ExtracurricularPage";
import CodingPage from "./pages/CodingPage";
import ContactPage from "./pages/ContactPage";
import ResearchPage from "./pages/ResearchPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import "./styles/theme.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/extracurricular" element={<ExtracurricularPage />} />
          <Route path="/coding" element={<CodingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);
