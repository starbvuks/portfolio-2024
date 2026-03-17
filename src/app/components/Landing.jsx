"use client";
import React, { useState, useRef, useCallback } from "react";
import { useTheme } from "./Hooks/useTheme";
import { useMobile } from "./Hooks/useMobile";
import { useEasterEggs } from "./Hooks/useEasterEggs";

import Header from "./Layout/Header";
import Loader from "./Layout/Loader";
import CommandPalette from "./Layout/CommandPalette";

import BlobCursor from "./Effects/BlobCursor";
import MeshBackground from "./Effects/MeshBackground";
import MatrixRain from "./Effects/MatrixRain";

import SectionWrapper from "./Sections/SectionWrapper";
import AboutSection from "./Sections/AboutSection";
import WhatIDoSection from "./Sections/WhatIDoSection";
import TechStackSection from "./Sections/TechStackSection";
import ExperienceSection from "./Sections/ExperienceSection";
import ProjectsSection from "./Sections/ProjectsSection";
import EducationSection from "./Sections/EducationSection";
import SocialsSection from "./Sections/SocialsSection";
import ContactSection from "./Sections/ContactSection";

export default function Landing() {
  const { darkMode, toggleMode } = useTheme();
  const { isMobile, cmdKey } = useMobile();
  const { showMatrix, showEgg } = useEasterEggs();
  const [showLoader, setShowLoader] = useState(true);

  const [expandedSections, setExpandedSections] = useState({
    about: true,
    whatIDo: true,
    techStack: true,
    experience: true,
    projects: true,
    education: true,
    socials: true,
  });

  // Section refs for command palette navigation
  const aboutRef = useRef(null);
  const whatRef = useRef(null);
  const techRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const eduRef = useRef(null);
  const socialsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    what: whatRef,
    tech: techRef,
    exp: expRef,
    proj: projRef,
    edu: eduRef,
    socials: socialsRef,
    contact: contactRef,
  };

  const toggleSection = useCallback((key) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const onLoaderDone = useCallback(() => setShowLoader(false), []);

  const hasExpanded = Object.values(expandedSections).some(Boolean);

  return (
    <div
      className={`relative z-10 flex flex-col min-h-screen transition-all duration-500 ${
        darkMode ? "text-[#dcdde2] bg-[#101014]" : "text-[#101014] bg-[#F2F2F2]"
      }`}
    >
      {/* Background effects */}
      <MeshBackground />
      <BlobCursor />
      <MatrixRain active={showMatrix} />

      {/* Loader */}
      {showLoader && <Loader onDone={onLoaderDone} />}

      {/* Konami egg popup */}
      {showEgg && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className={`p-6 ${darkMode ? "text-[#dcdde2]" : "text-[#3c3c3c]"}`}>
            <p className="font-gambarino text-xl font-bold mb-2">Konami Code Activated</p>
          </div>
        </div>
      )}

      {/* Command palette hint */}
      {!isMobile && (
        <div className={`${
          darkMode ? "border-[#22232c] bg-[#0c0c12]/40 text-[#6e7080]" : "border-[#d4d4d4] bg-white/80 text-[#5c5c5c]"
        } pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm text-[11px]`}>
          <span>Press</span>
          <span className="inline-flex items-center gap-1">
            <span className={`inline-grid place-items-center w-5 h-5 rounded-[6px] border ${
              darkMode ? "border-[#22232c] bg-[#101014] text-[#dcdde2]" : "border-[#d4d4d4] bg-white text-[#333]"
            } animate-pulse-slow`}>{cmdKey}</span>
            <span className={`inline-grid place-items-center w-5 h-5 rounded-[6px] border ${
              darkMode ? "border-[#22232c] bg-[#101014] text-[#dcdde2]" : "border-[#d4d4d4] bg-white text-[#333]"
            }`}>K</span>
          </span>
          <span>for Command Palette</span>
        </div>
      )}

      {/* Command Palette */}
      <CommandPalette sectionRefs={sectionRefs} onToggleTheme={toggleMode} />

      {/* Header */}
      <Header />

      {/* Content */}
      <div className={`flex flex-col flex-grow ${isMobile && !hasExpanded ? "justify-between" : ""}`}>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <SectionWrapper ref={aboutRef} title={["About", "Me"]} sectionKey="about" expanded={expandedSections.about} onToggle={() => toggleSection("about")}>
              <AboutSection expanded={expandedSections.about} />
            </SectionWrapper>

            <SectionWrapper ref={whatRef} title={["What", "I", "Do"]} sectionKey="whatIDo" expanded={expandedSections.whatIDo} onToggle={() => toggleSection("whatIDo")}>
              <WhatIDoSection expanded={expandedSections.whatIDo} />
            </SectionWrapper>

            <SectionWrapper ref={techRef} title={["Tech", "Stack"]} sectionKey="techStack" expanded={expandedSections.techStack} onToggle={() => toggleSection("techStack")}>
              <TechStackSection expanded={expandedSections.techStack} />
            </SectionWrapper>

            <SectionWrapper ref={expRef} title={["Experience"]} sectionKey="experience" expanded={expandedSections.experience} onToggle={() => toggleSection("experience")}>
              <ExperienceSection expanded={expandedSections.experience} />
            </SectionWrapper>

            <SectionWrapper ref={projRef} title={["Projects"]} sectionKey="projects" expanded={expandedSections.projects} onToggle={() => toggleSection("projects")}>
              <ProjectsSection expanded={expandedSections.projects} />
            </SectionWrapper>

            <SectionWrapper ref={eduRef} title={["Education"]} sectionKey="education" expanded={expandedSections.education} onToggle={() => toggleSection("education")}>
              <EducationSection expanded={expandedSections.education} />
            </SectionWrapper>

            <SectionWrapper ref={socialsRef} title={["Socials"]} sectionKey="socials" expanded={expandedSections.socials} onToggle={() => toggleSection("socials")}>
              <SocialsSection expanded={expandedSections.socials} />
            </SectionWrapper>
          </div>
        </div>

        <ContactSection ref={contactRef} />
      </div>
    </div>
  );
}
