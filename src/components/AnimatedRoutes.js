import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import HomePage from '../components/Home.js';
import AboutPage from '../components/About.js';
import ProjectsPage from '../components/Projects.js';
import SkillsPage from '../components/Skills.js';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes