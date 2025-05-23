"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const data = {
  whatIDo: {
    title: ["What", "I", "Do"],
    items: [
      { name: "FULL STACK DEV", number: "1" },
      { name: "APPLICATION DEV", number: "2" },
      { name: "PROJECT MANAGEMENT", number: "3" },
      { name: "UI / UX DESIGN", number: "4" },
      { name: "BRAND DESIGN", number: "5" },
      { name: "API DESIGN", number: "6" },
      { name: "RESPONSIVE DESIGN", number: "7" },
      { name: "AGILE METHODOLOGIES", number: "8" },
    ],
  },
  techStack: {
    title: ["Tech", "Stack"],
    items: [
      { name: "JAVASCRIPT (ES6+)", number: "1" },
      { name: "REACT JS", number: "2" },
      { name: "REACT NATIVE", number: "3" },
      { name: "NEXT JS", number: "4" },
      { name: "NODE JS", number: "5" },
      { name: "EXPRESS JS", number: "6" },
      { name: "REDUX", number: "7" },
      { name: "TAILWIND CSS", number: "8" },
      { name: "FIREBASE", number: "9" },
      { name: "MONGODB", number: "10" },
      { name: "POSTGRESQL", number: "11" },
      { name: "NEONDB", number: "12" },
      { name: "PRISMA", number: "13" },
      { name: "STRAPI CMS", number: "14" },
      { name: "AWS SUITE", number: "15" },
      { name: "DOCKER", number: "16" },
      { name: "NGINX", number: "17" },
      { name: "VERCEL", number: "18" },
      { name: "GIT & GITHUB", number: "19" },
      { name: "POSTMAN", number: "20" },
      { name: "FIGMA", number: "21" },
      { name: "CLICKUP", number: "22" },
    ],
  },
  experience: {
    title: ["Experience"],
    items: [
      {
        name: "FITBOOK",
        role: "Developer",
        year: "2025",
        url: "https://fitbook.club",
        number: "1",
        description:
          "Designed and developed using Next.js, Tailwind CSS, Prisma ORM, and Neon Serverless PostgreSQL, featuring robust CRUD operations for wardrobe and outfit management, secure authentication, and ease of use for cataloging items and building shareable outfits.",
        technologies: [
          "Next.js",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
          "NeonDB",
        ],
      },
      {
        name: "GAMITRONICS",
        role: "Video Game Producer",
        year: "Aug 2024 - April 2025",
        url: "https://gamitronics.com",
        number: "2",
        description:
          "Managed cross-team coordination and weekly task planning across active game projects. Oversaw task tracking and documentation using ClickUp and internal wiki systems. Built workflows for testing, daily logs, and milestone-based reporting.",
        technologies: [
          "ClickUp",
          "Wiki Documentation",
          "Team Coordination",
          "QA Workflows",
        ],
      },
      {
        name: "GAMITRONICS",
        role: "Game Backend Developer - Intern",
        year: "May 2024 - Aug 2024",
        url: "https://gamitronics.com",
        number: "3",
        description:
          "Developed an end-to-end Backend for a Unity VR game. Tasks included API design and development, Database architecture and implementation, integration and deployment. Worked with various platform SDKs to implement player authentication and cross-platform functionality.",
        technologies: [
          "ExpressJS",
          "MongoDB",
          "Steamworks SDK",
          "Oculus API",
          "PSN API",
        ],
      },
      {
        name: "ALEPH INNOVATION",
        role: "Founder",
        year: "Nov 2023 - Present",
        url: "https://alephinnov.com",
        number: "4",
        description:
          "Services start-up proficient in digital product design and development. Provides end-to-end solutions for UI/UX Design, Web Development, Application Development and Cloud services.",
        technologies: [
          "Web Development",
          "UI/UX Design",
          "Cloud Services",
          "Project Management",
        ],
      },
      {
        name: "STARTUP GRIND HYDERABAD",
        role: "Chapter Director",
        year: "Feb 2024 - Present",
        url: "https://www.startupgrind.com/hyderabad/",
        number: "5",
        description:
          "Appointed as Chapter Director for the Hyderabad Startup Grind Chapter. Role includes: Hosting events, community management, strong communication and network outreach, and most importantly making friends along the way.",
        technologies: [
          "Event Management",
          "Community Building",
          "Network Development",
          "Communication",
        ],
      },
      {
        name: "TALENTMAPP",
        role: "Co-Founder",
        year: "Feb 2023 - Present",
        url: "https://talentmapp.co",
        number: "6",
        description:
          "Co-founder at talentmapp, a startup built to solve the current issues in talent sourcing and build a global community for talented individuals in various industries. The platform is an AI People Search platform that understands subjective talent needs and intelligently returns matching profiles. Currently under development, working prototype is for laptop screens only.",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "OpenAI",
          "Next.js",
          "LinkedIn OAuth",
        ],
      },
      {
        name: "DESIGN AND ARCHITECTURE ARCHIVE",
        role: "Lead Developer",
        year: "Nov 2023 - Feb 2024",
        url: "https://portfolio.soad.co.in/",
        number: "7",
        description:
          "A web based platform for an organization to upload, archive, and display in-house projects and module work to potential recruiters, peers, family, etc. The platform accounts for displaying projects in various file types for all project categories with a multiple login access hierarchy for admins, visitors, recruiters and employees.",
        technologies: ["NextJS", "TailwindCSS", "Strapi CMS", "AWS EC2", "S3"],
      },
      {
        name: "HOSPITAL MANAGEMENT SYSTEM",
        role: "Lead Developer",
        year: "Oct 2023 - Dec 2023",
        url: "https://github.com/starbvuks/ayush-hms",
        number: "8",
        description:
          "End-To-End Hospital + Dispensary management system for Samsung Tablets, developed in React Native, Expo SDK front end and a PostgreSQL backend. Attendance Management with geolocation and calculation of employee to dispensary location distance. EHR, i.e: patient entry records. Fully interactive admin dashboard for data visualization and employee management.",
        technologies: [
          "React Native",
          "Expo SDK",
          "PostgreSQL",
          "Geolocation",
          "EHR",
        ],
      },
      {
        name: "HUNTSJOB",
        role: "Front-End Developer",
        year: "Apr 2023 - May 2023",
        url: "https://play.google.com/store/apps/details?id=com.googlesignexbee",
        number: "9",
        description:
          "Developed entire cross-platform mobile application using React Native as per client specifications. Re-designed pre-existing UI and Pattern Library implementing custom-built components using React Native's StyleSheet.",
        technologies: [
          "React Native",
          "StyleSheet",
          "Mobile UI/UX",
          "Cross-platform",
        ],
      },
      {
        name: "LANDMARK LOCATOR",
        role: "Full-Stack Developer",
        year: "2021",
        url: "https://landmark-locator.vercel.app/",
        number: "10",
        description:
          "Implemented the front-end of the landmark/tourist attraction reference site using React.js, ensuring a user-friendly interface and responsive design. Integrated Mapbox for coordinate data visualization, enhancing the user experience by providing interactive maps. Developed the back-end authentication system and landmark data storage using MongoDB, allowing for secure user login and data management.",
        technologies: ["React.js", "Mapbox API", "MongoDB", "Authentication"],
      },
      {
        name: "MMDB v2",
        role: "Full-Stack Developer",
        year: "2021",
        url: "https://mmdbv2.vercel.app/",
        number: "11",
        description:
          "Developed a movie database web application similar to IMDb using React and styled-components for a modern and interactive user interface. Implemented user authentication using Firebase SDK, allowing users to securely log in and interact with personalized features. Tailwind CSS was used to design a simple, functional and responsive user interface. Developing a custom MongoDB-based REST API to replace the TMDb API, allowing for more control over the application's data and features.",
        technologies: [
          "React",
          "Firebase SDK",
          "Tailwind CSS",
          "MongoDB",
          "REST API",
        ],
      },
    ],
  },
  education: {
    title: ["Education"],
    items: [
      {
        name: "WOXSEN UNIVERSITY",
        degree: "B.tech",
        year: "2021 - 2025",
        url: "https://woxsen.edu.in/academics/programs/b-tech/",
        number: "1",
        description:
          "Completed 4 year undergraduate degree in Bachelors in Technology, specialized in Computer Science. Gained core knowledge in data structures, algorithms, computer architecture, operating systems, database management, and software engineering. Undertook elective coursework in emerging tech areas such as web technologies, digital systems, and design thinking. Participated in multiple industry-aligned internships.",
      },
      {
        name: "SCHOOL OF ACCELERATED LEARNING",
        degree: "Product Engineering Bootcamp",
        year: "2021",
        url: "https://www.soal.io/",
        number: "2",
        description:
          "Acquired full-stack development skills, with a focus on front-end technologies, enabling me to build complete software applications and websites. Gained proficiency in handling all aspects of development, including front-end, back-end, database, debugging, and testing. Developed a strong foundation in design fundamentals and tools, with a specialization in UI/UX Design and Service Design.",
      },
      {
        name: "HARVARD'S CS50x",
        degree: "Computer Science Course",
        year: "2020 - 2021",
        url: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
        number: "3",
        description:
          "Gained a broad and robust understanding of computer science and programming concepts. Developed skills in abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Became familiar with multiple programming languages, including C, Python, SQL, JavaScript, CSS, and HTML. Developed the ability to learn and adapt to evolving technologies.",
      },
    ],
  },
  socials: {
    title: ["Socials"],
    items: [
      {
        name: "LINKEDIN",
        url: "https://www.linkedin.com/in/sarvag-kalari/",
        number: "1",
      },
      { name: "GITHUB", url: "https://github.com/starbvuks", number: "2" },
      {
        name: "STACK OVERFLOW",
        url: "https://stackoverflow.com/users/13939799/starbvuks",
        number: "3",
      },
      {
        name: "SPOTIFY",
        url: "https://open.spotify.com/user/nl8l3a15fcwt16ziq91rp82eq?si=x_g4W9_6SbqNENbHlJkjCg",
        number: "4",
      },
      // {
      //   name: "INSTAGRAM",
      //   url: "https://www.instagram.com/sarvagk",
      //   number: "5",
      // },
    ],
  },
};

const Landing = () => {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(true);
  const [typedSequence, setTypedSequence] = useState("");
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedEducation, setExpandedEducation] = useState(null);
  const [konami, setKonami] = useState("");
  const [showEgg, setShowEgg] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const canvasRef = useRef(null);
  const contactRef = useRef(null);
  const contentRef = useRef(null);
  const mainContentRef = useRef(null);
  const matrixTimeoutRef = useRef(null);
  const transitionRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [expandedSections, setExpandedSections] = useState({
    whatIDo: false,
    techStack: false,
    experience: false,
    education: false,
    socials: false,
    contact: true, // Contact always open
  });

  // Update layout measurements when sections expand/collapse
  useEffect(() => {
    const updateLayout = () => {
      if (isMobile && mainContentRef.current) {
        setContentHeight(mainContentRef.current.scrollHeight);
      }
    };
    
    updateLayout();
    
    // Small delay to ensure DOM has updated after transitions complete
    const timeoutId = setTimeout(updateLayout, 500);
    return () => clearTimeout(timeoutId);
  }, [expandedSections, isMobile]);

  // Use ResizeObserver to monitor content height changes
  useEffect(() => {
    if (!mainContentRef.current) return;
    
    const resizeObserver = new ResizeObserver(() => {
      if (isMobile && mainContentRef.current) {
        setContentHeight(mainContentRef.current.scrollHeight);
        setViewportHeight(window.innerHeight);
      }
    });
    
    resizeObserver.observe(mainContentRef.current);
    return () => resizeObserver.disconnect();
  }, [isMobile]);

  // Check if device is mobile and handle viewport measurements
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setViewportHeight(window.innerHeight);
      
      if (mainContentRef.current) {
        setContentHeight(mainContentRef.current.scrollHeight);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Add global styles to prevent blue highlight on mobile
  useEffect(() => {
    // Add style to prevent blue highlight on mobile
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const secretSequence = "s3crets";
    const konamiCode =
      "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

    const handleKeyPress = (event) => {
      const { key } = event;

      // Handle s3crets sequence
      const newTypedSequence = typedSequence + key;
      if (newTypedSequence === secretSequence) {
        router.push("/s3crets");
        setTypedSequence(""); // Reset typed sequence after successful match
      } else if (!secretSequence.startsWith(newTypedSequence)) {
        // If the typed sequence doesn't match the beginning of the secret sequence,
        // reset the typed sequence to start fresh.
        setTypedSequence(key);
      } else {
        setTypedSequence(newTypedSequence);
      }

      // Handle konami code
      const newKonami = konami + event.key;
      if (
        konamiCode.includes(newKonami) &&
        newKonami.length <= konamiCode.length
      ) {
        setKonami(newKonami);
        if (newKonami === konamiCode) {
          setShowEgg(true);
          setShowMatrix(true);

          // Hide egg notification after 3 seconds
          setTimeout(() => setShowEgg(false), 3000);

          // Stop matrix effect after 10 seconds
          if (matrixTimeoutRef.current) {
            clearTimeout(matrixTimeoutRef.current);
          }
          matrixTimeoutRef.current = setTimeout(() => {
            setShowMatrix(false);
          }, 10000);

          setKonami("");
        }
      } else {
        setKonami("");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (matrixTimeoutRef.current) {
        clearTimeout(matrixTimeoutRef.current);
      }
    };
  }, [router, typedSequence, konami]);

  // Matrix rain effect
  useEffect(() => {
    if (!showMatrix || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to use
    const characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = characters.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to track the y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Drawing function
    const draw = () => {
      if (!showMatrix) return;

      // Semi-transparent black background to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = "#8BCD00";
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];

        // x coordinate is determined by the column * font size
        // y coordinate is determined by the drop * font size
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset the drop back to the top after it reaches a certain point
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move the drop down
        drops[i]++;
      }

      // Call draw again
      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [showMatrix]);

  // Handle window resize for canvas
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMode = () => {
    setIsTransitioning(true);

    // Create transition effect
    const transitionCanvas = document.createElement("canvas");
    transitionCanvas.className = "fixed inset-0 z-50 pointer-events-none";
    document.body.appendChild(transitionCanvas);

    const ctx = transitionCanvas.getContext("2d");
    transitionCanvas.width = window.innerWidth;
    transitionCanvas.height = window.innerHeight;

    // Store the canvas in ref for cleanup
    transitionRef.current = transitionCanvas;

    // Calculate center point (where the toggle button is)
    const centerX = window.innerWidth - 80;
    const centerY = 50;

    // Animation variables
    let radius = 0;
    const maxRadius =
      Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      ) * 1.2;
    const targetColor = darkMode ? "#DBDBDB" : "#131313";
    let startTime = null;
    const duration = 900; // Animation duration in ms

    // Easing function for smoother animation
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    // Animation function
    const animate = (timestamp) => {
      if (!transitionRef.current) return;

      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      radius = maxRadius * easedProgress;

      ctx.clearRect(0, 0, transitionCanvas.width, transitionCanvas.height);

      // Draw expanding circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = targetColor;
      ctx.fill();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animation complete - toggle the actual mode
        setDarkMode((prevMode) => !prevMode);

        // Clean up with a fade out effect
        const fadeOut = (opacity) => {
          if (!transitionRef.current) return;

          transitionRef.current.style.opacity = opacity;

          if (opacity <= 0) {
            if (transitionRef.current) {
              document.body.removeChild(transitionRef.current);
              transitionRef.current = null;
            }

            // Reset transition state
            setIsTransitioning(false);
          } else {
            setTimeout(() => fadeOut(opacity - 0.1), 20);
          }
        };

        fadeOut(1.0);
      }
    };

    // Start animation
    requestAnimationFrame(animate);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (transitionRef.current) {
        document.body.removeChild(transitionRef.current);
        transitionRef.current = null;
      }
    };
  }, []);

  const toggleExpand = (index) => {
    if (expandedExperience === index) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(index);
    }
  };

  const toggleEducation = (index) => {
    if (expandedEducation === index) {
      setExpandedEducation(null);
    } else {
      setExpandedEducation(index);
    }
  };

  const toggleSection = (section) => {
    if (section === "contact") return;

    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Add a mobile-friendly way to trigger Matrix effect
  const triggerMatrixEffect = () => {
    setShowEgg(true);
    setShowMatrix(true);
    
    // Hide egg notification after 3 seconds
    setTimeout(() => setShowEgg(false), 3000);
    
    // Stop matrix effect after 10 seconds
    if (matrixTimeoutRef.current) {
      clearTimeout(matrixTimeoutRef.current);
    }
    matrixTimeoutRef.current = setTimeout(() => {
      setShowMatrix(false);
    }, 10000);
  };

  // Ensure background color is properly set when toggling
  useEffect(() => {
    // Apply background color to html and body elements
    document.documentElement.style.backgroundColor = darkMode ? '#131313' : '#DBDBDB';
    document.body.style.backgroundColor = darkMode ? '#131313' : '#DBDBDB';
  }, [darkMode]);

  // Add subtle animation to toggle button
  useEffect(() => {
    if (!toggleButtonRef.current) return;
    
    const handleMouseMove = (e) => {
      if (isTransitioning) return;
      
      const button = toggleButtonRef.current;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (x - centerX) / centerX * 10;
      const angleY = (y - centerY) / centerY * 10;
      
      button.style.transform = `perspective(300px) rotateY(${angleX}deg) rotateX(${-angleY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (toggleButtonRef.current) {
        toggleButtonRef.current.style.transform = 'perspective(300px) rotateY(0deg) rotateX(0deg)';
      }
    };
    
    const button = toggleButtonRef.current;
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTransitioning]);

  return (
    <div
      className={`flex flex-col min-h-screen transition-all duration-500 ${
        darkMode ? `text-[#DBDBDB] bg-[#131313]` : `text-[#131313] bg-[#DBDBDB]`
      }`}
      ref={contentRef}
    >
      {/* Matrix rain canvas */}
      {showMatrix && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-40 pointer-events-none"
          style={{ opacity: 0.7 }}
        />
      )}

      {/* Easter egg popup */}
      {showEgg && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div
            className={`p-6 rounded-md shadow-lg transform scale-up transition-all duration-500 ${
              darkMode
                ? "bg-[#242424] text-[#ECECEC]"
                : "bg-[#f2f2f2] text-[#3c3c3c]"
            }`}
          >
            <p className="text-xl font-bold mb-2">Konami Code Activated</p>
            <p className="text-[#8BCD00]">Welcome to the Matrix</p>
          </div>
        </div>
      )}

      <div
        className={`flex justify-between items-end p-4 md:p-8 border-b-2 transition-all duration-500
          ${darkMode ? ` border-[#242424]` : ` border-[#d2d2d2]`}
        `}
      >
        <div className="flex items-end">
          <span
            className={`font-gambarino text-4xl md:text-7xl cursor-help tracking-tight transition-all duration-500 ${
              darkMode
                ? " text-[#DBDBDB] hover:text-[#8BCD00]"
                : " text-[#464545] hover:text-[#8BCD00]"
            }`}
          >
            Sarvag Kalari
          </span>
          <span
            className={`flex items-center font-gambarino font-light text-xs md:text-lg tracking-tight transition-all duration-500 ${
              darkMode ? " text-[#464545]" : "text-[#aaaaaa]"
            }`}
          >
            <span className="text-base md:text-2xl tracking-tighter">
              &emsp; // &emsp;
            </span>
            PORTFOLIO 2025
          </span>
        </div>
        <div>
          <button
            ref={toggleButtonRef}
            onClick={toggleMode}
            disabled={isTransitioning}
            className={`rounded-full w-10 h-10 text-lg md:w-16 md:h-16 md:text-xl flex items-center justify-center border-[1px] md:border-[2px] hover:scale-110 transform transition-all duration-300 ${
              darkMode 
                ? `border-[#242424] hover:border-[#8BCD00]` 
                : `border-[#aaaaaa] hover:border-[#8BCD00]`
            } ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            aria-label="Toggle dark mode"
          >
            <div className="relative overflow-hidden h-full w-full flex items-center justify-center">
              <span
                className={`absolute transition-all duration-500 ${
                  darkMode
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                🌑
              </span>
              <span
                className={`absolute transition-all duration-500 ${
                  darkMode
                    ? "translate-y-10 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                ☀️
              </span>
            </div>
            <div className={`absolute inset-0 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300 ${
              darkMode ? "bg-[#8BCD00]" : "bg-[#8BCD00]"
            }`}></div>
          </button>
        </div>
      </div>

      {/* Main content wrapper - using flex to push contact to bottom when possible */}
      <div 
        ref={mainContentRef}
        className="flex flex-col flex-grow"
      >
        {/* Content sections container */}
        <div className="flex flex-col">
          {/* WHAT I DO */}
          <div
            className={`flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 transition-all duration-500 ${
              darkMode ? " border-[#242424]" : "border-[#d2d2d2]"
            }`}
          >
            {/* Title with toggle */}
            <div
              className={`flex justify-between text-2xl md:text-4xl transition-all duration-500 cursor-pointer group ${
                darkMode
                  ? "text-[#464545] hover:text-[#8BCD00]"
                  : "text-[#aaaaaa] hover:text-[#8BCD00]"
              }`}
              onClick={() => toggleSection("whatIDo")}
            >
              <span className="font-gambarino">What</span>
              <span className="font-gambarino">I</span>
              <span className="font-gambarino flex items-center">
                Do
                <button
                  className={`ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-[#8BCD00] ${
                    darkMode ? "hover:text-[#8BCD00]" : "hover:text-[#8BCD00]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection("whatIDo");
                  }}
                >
                  {expandedSections.whatIDo ? (
                    <span className="text-xl md:text-2xl transform translate-y-[-2px]">
                      −
                    </span>
                  ) : (
                    <span className="text-xl md:text-2xl">+</span>
                  )}
                </button>
              </span>
            </div>
            {/* Items */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSections.whatIDo
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`transition-all duration-500 ${
                  darkMode ? " text-[#ECECEC]" : "text-[#3c3c3c]"
                }`}
              >
                <div className="font-esenka text-lg md:text-3xl font-black py-4 md:py-8 w-full">
                  {/* Two column layout with proper alignment */}
                  <div className="flex justify-between w-full">
                    {[...Array(2)].map((_, colIndex) => {
                      const itemsPerColumn = Math.ceil(
                        data.whatIDo.items.length / 2
                      );
                      const startIndex = colIndex * itemsPerColumn;
                      const columnItems = data.whatIDo.items.slice(
                        startIndex,
                        startIndex + itemsPerColumn
                      );

                      return (
                        <div
                          key={colIndex}
                          className={`flex flex-col gap-2 md:gap-4 ${
                            colIndex === 0 ? "" : "text-right"
                          }`}
                        >
                          {columnItems.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center transform transition-all duration-300 hover:translate-x-1 ${
                                colIndex === 1 ? "flex-row-reverse" : ""
                              }`}
                              style={{
                                transitionDelay: `${index * 50}ms`,
                                opacity: expandedSections.whatIDo ? 1 : 0,
                                transform: expandedSections.whatIDo
                                  ? "translateY(0px)"
                                  : "translateY(20px)",
                              }}
                            >
                              <div
                                className={`w-6 md:w-8 text-center font-esenka font-normal text-xs md:text-xl ${
                                  darkMode ? "text-[#464545]" : "text-[#aaaaaa]"
                                }`}
                              >
                                {item.number}
                              </div>
                              <div
                                className={`${
                                  colIndex === 0 ? "ml-3" : "mr-3"
                                } hover:text-[#8BCD00] transition-colors duration-300`}
                              >
                                {item.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TECH STACK */}
          <div
            className={`flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 transition-all duration-500 ${
              darkMode ? " border-[#242424]" : "border-[#d2d2d2]"
            }`}
          >
            {/* Title with toggle */}
            <div
              className={`flex justify-between text-2xl md:text-4xl transition-all duration-500 cursor-pointer group ${
                darkMode
                  ? "text-[#464545] hover:text-[#8BCD00]"
                  : "text-[#aaaaaa] hover:text-[#8BCD00]"
              }`}
              onClick={() => toggleSection("techStack")}
            >
              <span className="font-gambarino">Tech</span>
              <span className="font-gambarino flex items-center">
                Stack
                <button
                  className={`ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-[#8BCD00] ${
                    darkMode ? "hover:text-[#8BCD00]" : "hover:text-[#8BCD00]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection("techStack");
                  }}
                >
                  {expandedSections.techStack ? (
                    <span className="text-xl md:text-2xl transform translate-y-[-2px]">
                      −
                    </span>
                  ) : (
                    <span className="text-xl md:text-2xl">+</span>
                  )}
                </button>
              </span>
            </div>
            {/* Items */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSections.techStack
                  ? "max-h-[1200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`transition-all duration-500 ${
                  darkMode ? " text-[#ECECEC]" : "text-[#3c3c3c]"
                }`}
              >
                <div className="font-esenka text-lg md:text-3xl font-black py-4 md:py-8 w-full">
                  {/* Three column layout with proper alignment */}
                  <div className="flex justify-between w-full">
                    {[...Array(3)].map((_, colIndex) => {
                      const itemsPerColumn = Math.ceil(
                        data.techStack.items.length / 3
                      );
                      const startIndex = colIndex * itemsPerColumn;
                      const columnItems = data.techStack.items.slice(
                        startIndex,
                        startIndex + itemsPerColumn
                      );

                      return (
                        <div
                          key={colIndex}
                          className={`flex flex-col gap-2 md:gap-4 ${
                            colIndex === 0
                              ? ""
                              : colIndex === 1
                              ? "items-center text-center"
                              : "items-end text-right"
                          }`}
                        >
                          {columnItems.map((item, index) => (
                            <div
                              key={index}
                              className={`flex items-center transform transition-all duration-300 hover:translate-x-1 ${
                                colIndex === 0
                                  ? ""
                                  : colIndex === 1
                                  ? "justify-center"
                                  : "flex-row-reverse"
                              }`}
                              style={{
                                transitionDelay: `${index * 30}ms`,
                                opacity: expandedSections.techStack ? 1 : 0,
                                transform: expandedSections.techStack
                                  ? "translateY(0px)"
                                  : "translateY(20px)",
                              }}
                            >
                              <div
                                className={`w-6 md:w-8 text-center font-esenka font-normal text-xs md:text-xl ${
                                  darkMode ? "text-[#464545]" : "text-[#aaaaaa]"
                                }`}
                              >
                                {item.number}
                              </div>
                              <div
                                className={`${
                                  colIndex === 0
                                    ? "ml-3"
                                    : colIndex === 1
                                    ? "mx-3"
                                    : "mr-3"
                                } hover:text-[#8BCD00] transition-colors duration-300`}
                              >
                                {item.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div
            className={`flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 transition-all duration-500 ${
              darkMode ? " border-[#242424]" : "border-[#d2d2d2]"
            }`}
          >
            {/* Title with toggle */}
            <div
              className={`flex justify-between text-2xl md:text-4xl transition-all duration-500 cursor-pointer group ${
                darkMode
                  ? "text-[#464545] hover:text-[#8BCD00]"
                  : "text-[#aaaaaa] hover:text-[#8BCD00]"
              }`}
              onClick={() => toggleSection("experience")}
            >
              <span className="font-gambarino">Experience</span>
              <button
                className={`ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-[#8BCD00] ${
                  darkMode ? "hover:text-[#8BCD00]" : "hover:text-[#8BCD00]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection("experience");
                }}
              >
                {expandedSections.experience ? (
                  <span className="text-xl md:text-lg transform translate-y-[-2px]">
                    −
                  </span>
                ) : (
                  <span className="text-xl md:text-lg">+</span>
                )}
              </button>
            </div>
            {/* Items */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSections.experience
                  ? "max-h-[2000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`flex justify-between font-esenka text-lg md:text-3xl transition-all duration-500 ${
                  darkMode ? " text-[#ECECEC]" : "text-[#3c3c3c]"
                }`}
              >
                <div className="flex flex-col gap-3 md:gap-6 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
                  {data.experience.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-full transform transition-all duration-300"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        opacity: expandedSections.experience ? 1 : 0,
                        transform: expandedSections.experience
                          ? "translateY(0px)"
                          : "translateY(20px)",
                      }}
                    >
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-2 md:gap-4 md:flex md:flex-row md:items-end">
                          <div className="flex items-center group/item">
                            <a
                              href={item.url}
                              className={`border-b-[1px] border-dashed hover:border-solid hover:text-[#8BCD00] cursor-pointer transition ${
                                darkMode
                                  ? "border-[#ECECEC] hover:border-[#8BCD00]"
                                  : "border-[#3c3c3c] hover:border-[#8BCD00]"
                              }`}
                            >
                              {item.name}
                            </a>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(index);
                              }}
                              className={`ml-2 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full hover:text-[#8BCD00] transition-colors duration-300 group-hover/item:text-[#8BCD00]`}
                            >
                              {expandedExperience === index ? (
                                <span className="text-xl md:text-xl transform translate-y-[-2px]">
                                  −
                                </span>
                              ) : (
                                <span className="text-xl md:text-xl">+</span>
                              )}
                            </button>
                          </div>

                          <span
                            className={`font-esenka font-light text-xs md:text-base ${
                              darkMode ? " text-[#464545]" : "text-[#939393]"
                            }`}
                          >
                            {item.role}, &nbsp; {item.year}
                          </span>
                        </div>
                        <span
                          className="font-esenka font-normal text-xs md:text-xl mt-3 md:mt-0"
                          style={index === 0 ? { paddingRight: "3px" } : {}}
                        >
                          {item.number}
                        </span>
                      </div>

                      <div
                        className={`mt-2 pl-4 text-sm md:text-base font-normal border-l-2 transition-all duration-500 overflow-hidden max-w-[90%] md:max-w-[40%] ${
                          expandedExperience === index
                            ? "max-h-[300px] opacity-100"
                            : "max-h-0 opacity-0"
                        } ${
                          darkMode
                            ? "border-[#242424] text-[#A0A0A0]"
                            : "border-[#d2d2d2] text-[#646464]"
                        }`}
                      >
                        <p className="mb-2">{item.description}</p>
                        {item.technologies && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className={`text-xs px-2 py-1 rounded-sm transform transition-all duration-300 ${
                                  darkMode
                                    ? "bg-[#242424] text-[#ECECEC]"
                                    : "bg-[#e9e9e9] text-[#464545]"
                                }`}
                                style={{
                                  transitionDelay: `${i * 50}ms`,
                                  opacity: expandedExperience === index ? 1 : 0,
                                  transform:
                                    expandedExperience === index
                                      ? "translateY(0px)"
                                      : "translateY(10px)",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div
            className={`flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 transition-all duration-500 ${
              darkMode ? " border-[#242424]" : "border-[#d2d2d2]"
            }`}
          >
            {/* Title with toggle */}
            <div
              className={`flex justify-between text-2xl md:text-4xl transition-all duration-500 cursor-pointer group ${
                darkMode
                  ? "text-[#464545] hover:text-[#8BCD00]"
                  : "text-[#aaaaaa] hover:text-[#8BCD00]"
              }`}
              onClick={() => toggleSection("education")}
            >
              <span className="font-gambarino">Education</span>
              <button
                className={`ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-[#8BCD00] ${
                  darkMode ? "hover:text-[#8BCD00]" : "hover:text-[#8BCD00]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection("education");
                }}
              >
                {expandedSections.education ? (
                  <span className="text-xl md:text-lg transform translate-y-[-2px]">
                    −
                  </span>
                ) : (
                  <span className="text-xl md:text-lg">+</span>
                )}
              </button>
            </div>
            {/* Items */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSections.education
                  ? "max-h-[600px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`flex justify-between font-esenka text-lg md:text-3xl transition-all duration-500 ${
                  darkMode ? " text-[#ECECEC]" : "text-[#3c3c3c]"
                }`}
              >
                <div className="flex flex-col gap-4 md:gap-6 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
                  {data.education.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-full transform transition-all duration-300"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        opacity: expandedSections.education ? 1 : 0,
                        transform: expandedSections.education
                          ? "translateY(0px)"
                          : "translateY(20px)",
                      }}
                    >
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-0 md:gap-4 md:flex md:flex-row md:items-end">
                          <div className="flex items-center group/item">
                            <a
                              href={item.url}
                              className="hover:text-[#8BCD00] cursor-pointer transition mt-2 md:mt-0"
                            >
                              {item.name}
                            </a>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleEducation(index);
                              }}
                              className={`ml-2 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full hover:text-[#8BCD00] transition-colors duration-300 group-hover/item:text-[#8BCD00]`}
                            >
                              {expandedEducation === index ? (
                                <span className="text-xl md:text-xl transform translate-y-[-2px]">
                                  −
                                </span>
                              ) : (
                                <span className="text-xl md:text-xl">+</span>
                              )}
                            </button>
                          </div>
                          <span
                            className={`font-esenka font-light text-xs md:text-base ${
                              darkMode ? " text-[#464545]" : "text-[#939393]"
                            }`}
                          >
                            {item.degree}, &nbsp; {item.year}
                          </span>
                        </div>
                        <span
                          className="font-esenka font-normal text-xs md:text-xl mt-3 md:mt-0"
                          style={index === 0 ? { paddingRight: "3px" } : {}}
                        >
                          {item.number}
                        </span>
                      </div>
                      {item.description && (
                        <div
                          className={`mt-2 pl-4 text-sm md:text-base font-normal border-l-2 transition-all duration-500 overflow-hidden max-w-[90%] md:max-w-[40%] ${
                            expandedEducation === index
                              ? "max-h-[300px] opacity-100"
                              : "max-h-0 opacity-0"
                          } ${
                            darkMode
                              ? "border-[#242424] text-[#A0A0A0]"
                              : "border-[#d2d2d2] text-[#646464]"
                          }`}
                        >
                          <p>{item.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div
            className={`flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 transition-all duration-500 ${
              darkMode ? " border-[#242424]" : "border-[#d2d2d2]"
            }`}
          >
            {/* Title with toggle */}
            <div
              className={`flex justify-between text-2xl md:text-4xl transition-all duration-500 cursor-pointer group ${
                darkMode
                  ? "text-[#464545] hover:text-[#8BCD00]"
                  : "text-[#aaaaaa] hover:text-[#8BCD00]"
              }`}
              onClick={() => toggleSection("socials")}
            >
              <span className="font-gambarino">Socials</span>
              <button
                className={`ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-[#8BCD00] ${
                  darkMode ? "hover:text-[#8BCD00]" : "hover:text-[#8BCD00]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection("socials");
                }}
              >
                {expandedSections.socials ? (
                  <span className="text-xl md:text-lg transform translate-y-[-2px]">
                    −
                  </span>
                ) : (
                  <span className="text-xl md:text-lg">+</span>
                )}
              </button>
            </div>
            {/* Items */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSections.socials
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`flex justify-between font-esenka text-lg md:text-3xl transition-all duration-500 ${
                  darkMode ? " text-[#ECECEC]" : "text-[#3c3c3c]"
                }`}
              >
                <div className="flex flex-col gap-1 md:gap-4 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
                  {data.socials.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between w-full transform transition-all duration-300"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                        opacity: expandedSections.socials ? 1 : 0,
                        transform: expandedSections.socials
                          ? "translateY(0px)"
                          : "translateY(20px)",
                      }}
                    >
                      <a
                        href={item.url}
                        className="hover:text-[#8BCD00] cursor-pointer transition"
                      >
                        {item.name}
                      </a>
                      <span
                        className="font-esenka font-normal text-xs md:text-xl"
                        style={index === 0 ? { paddingRight: "3px" } : {}}
                      >
                        {item.number}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Spacer that grows to push contact to bottom on mobile when content is shorter than viewport */}
        {isMobile && contentHeight < viewportHeight - 200 && <div className="flex-grow" />}

        {/* CONTACT - Now with proper positioning */}
        <div 
          ref={contactRef}
          className={`flex flex-col px-4 md:px-8 py-4 md:py-6 transition-all duration-300 ${
            !isMobile ? 'pt-72' : ''
          }`}
        >
          {/* Title without toggle */}
          <div
            className={`flex justify-between text-2xl md:text-4xl transition-all duration-500 ${
              darkMode ? "text-[#464545]" : "text-[#aaaaaa]"
            }`}
          >
            <span className="font-gambarino">Contact</span>
            <span className="font-gambarino">Me</span>
          </div>
          
          {/* Always visible content */}
          <div className="transition-all duration-500 ease-in-out">
            <div
              className={`flex flex-row justify-between mt-8 md:mt-20 font-apercu text-sm md:text-xl tracking-tight ${
                darkMode ? " text-[#515151]" : " text-[#939393]"
              }`}
            >
              <div className="flex flex-col mb-4 md:mb-0">
                <a
                  href="mailto:sarvagk@gmail.com"
                  className="hover:text-[#8BCD00] transition-colors duration-300"
                >
                  sarvagk@gmail.com
                </a>
                <a
                  href="tel:+919533586416"
                  className="hover:text-[#8BCD00] transition-colors duration-300"
                >
                  +91 95335 86416
                </a>
              </div>

              <div className="flex flex-col text-right md:text-left">
                <p className="font-medium">Frisco, Texas, USA</p>
                <p className="mt-2 text-xs md:text-sm">
                  Full-Stack Developer & Video Game Producer
                </p>
                {!isMobile && (
                  <div className="flex justify-center mt-3 mb-2 opacity-75">
                    <div
                      className="flex items-center space-x-1 cursor-help"
                      title="Try the Konami code!"
                    >
                      <img src="/assets/keys/up.svg" alt="Up" className="h-6 w-6" />
                      <img src="/assets/keys/up.svg" alt="Up" className="h-6 w-6" />
                      <img
                        src="/assets/keys/down.svg"
                        alt="Down"
                        className="h-6 w-6"
                      />
                      <img
                        src="/assets/keys/down.svg"
                        alt="Down"
                        className="h-6 w-6"
                      />
                      <img
                        src="/assets/keys/left.svg"
                        alt="Left"
                        className="h-6 w-6"
                      />
                      <img
                        src="/assets/keys/right.svg"
                        alt="Right"
                        className="h-6 w-6"
                      />
                      <img
                        src="/assets/keys/left.svg"
                        alt="Left"
                        className="h-6 w-6"
                      />
                      <img
                        src="/assets/keys/right.svg"
                        alt="Right"
                        className="h-6 w-6"
                      />
                      <img src="/assets/keys/b.svg" alt="B" className="h-6 w-6" />
                      <img src="/assets/keys/a.svg" alt="A" className="h-6 w-6" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
