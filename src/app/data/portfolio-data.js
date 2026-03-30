const data = {
  whatIDo: {
    title: ["What", "I", "Do"],
    items: [
      { name: "FULL STACK DEV", number: "1" },
      { name: "MOBILE APP DEV", number: "2" },
      { name: "API ENGINEERING", number: "3" },
      { name: "EMBEDDED SYSTEMS (learning)", number: "4" },
      { name: "ML SYSTEMS & EDGE AI ARCHITECTURE", number: "5" },
    ],
  },
  techStack: {
    title: ["Tech", "Stack"],
    groups: [
      { label: "Languages", items: ["JavaScript", "TypeScript", "Rust", "Python"] },
      { label: "Frameworks & Libraries", items: ["React", "React Native", "Next.js", "Node.js", "Express.js", "Tailwind CSS"] },
      { label: "Databases & ORM", items: ["MongoDB", "PostgreSQL", "NeonDB", "Prisma", "Firebase"] },
      { label: "AI & ML", items: ["PyTorch", "Hugging Face Transformers", "On-Device Inference", "LLM Fine-tuning", "SQLite-vec", "ASR/VAD Pipelines", "Model Quantization", "Prompt Engineering", "RAG"] },
      { label: "Cloud & DevOps", items: ["AWS", "Docker", "Nginx", "Vercel", "Kubernetes (k3s)", "Tailscale", "NATS"] },
      { label: "Tools", items: ["Git & GitHub", "Postman", "Figma", "ClickUp"] },
    ],
  },
  experience: {
    title: ["Experience"],
    items: [
      {
        name: "LIMI AI",
        url: "https://limiai.co",
        role: "Founding Engineer",
        year: "Current",
        number: "1",
        roles: [
          {
            title: "Principal Founding ML Product Engineer",
            year: "",
            description:
              "Founding engineer at LIMI AI, a hardware AI startup building ambient intelligence infrastructure embedded in premium light fixtures. Leading ML product development and systems architecture — designing the on-device intelligence layer, privacy-first data pipeline, and multi-model orchestration system. Driving product strategy, technical roadmap, and investor-facing demos as we raise our seed round.",
            technologies: [
              "Edge AI",
              "On-Device ML",
              "Privacy Architecture",
              "Model Orchestration",
              "Embedded Systems",
              "Product Strategy",
            ],
          },
        ],
      },
      {
        name: "GAMITRONICS",
        url: "https://gamitronics.com",
        role: "Video Game Producer",
        year: "Apr 2024 - May 2025",
        number: "2",
        roles: [
          {
            title: "Video Game Producer",
            year: "Aug 2024 - May 2025",
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
            title: "Game Backend Developer - Intern",
            year: "Apr 2024 - Aug 2024",
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
        ],
      },
      {
        name: "STARTUP GRIND HYDERABAD",
        role: "Chapter Director",
        year: "Feb 2024 - Apr 2025",
        url: "https://www.startupgrind.com/hyderabad/",
        number: "3",
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
        year: "Feb 2023 - June 2025",
        url: "https://talentmapp.co",
        number: "4",
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
    ],
  },
  projects: {
    title: ["Projects"],
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
        name: "ALEPH INNOVATION",
        role: "Founder",
        year: "Nov 2023 - Present",
        url: null,
        number: "2",
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
        name: "DESIGN AND ARCHITECTURE ARCHIVE",
        role: "Lead Developer",
        year: "Nov 2023 - Feb 2024",
        url: "https://portfolio.soad.co.in/",
        number: "3",
        description:
          "A web based platform for an organization to upload, archive, and display in-house projects and module work to potential recruiters, peers, family, etc. The platform accounts for displaying projects in various file types for all project categories with a multiple login access hierarchy for admins, visitors, recruiters and employees.",
        technologies: ["NextJS", "TailwindCSS", "Strapi CMS", "AWS EC2", "S3"],
      },
      {
        name: "GOVERNMENT HMS",
        role: "Lead Developer",
        year: "Oct 2023 - Dec 2023",
        url: null,
        number: "4",
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
        number: "5",
        description:
          "Developed entire cross-platform mobile application using React Native as per client specifications. Re-designed pre-existing UI and Pattern Library implementing custom-built components using React Native's StyleSheet.",
        technologies: [
          "React Native",
          "StyleSheet",
          "Mobile UI/UX",
          "Cross-platform",
        ],
      },
    ],
    bootcampCapstones: {
      title: "Bootcamp Capstone Projects",
      items: [
        {
          name: "LANDMARK LOCATOR",
          role: "Full-Stack Developer",
          year: "2021",
          url: "https://landmark-locator.vercel.app/",
          number: "1",
          description:
            "Implemented the front-end of the landmark/tourist attraction reference site using React.js, ensuring a user-friendly interface and responsive design. Integrated Mapbox for coordinate data visualization, enhancing the user experience by providing interactive maps. Developed the back-end authentication system and landmark data storage using MongoDB, allowing for secure user login and data management.",
          technologies: ["React.js", "Mapbox API", "MongoDB", "Authentication"],
        },
        {
          name: "MMDB v2",
          role: "Full-Stack Developer",
          year: "2021",
          url: "https://mmdbv2.vercel.app/",
          number: "2",
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
  },
  about: {
    title: ["About", "Me"],
    bio:
      "I pick things up fast, build things that work, and figure out the rest along the way. Currently driving ML systems and product development at LIMI AI and actively raising our seed round to scale ambient intelligence infrastructure.",
    highlights: [
      {
        label: "Into",
        items: ["film", "video games", "vinyl collecting", "writing", "coffee"],
      },
      {
        label: "Currently exploring",
        items: ["edge inference", "on-device fine-tuning", "privacy-first ML", "audio ML", "k3s", "Rust"],
      },
    ],
  },
  education: {
    title: ["Education"],
    items: [
      {
        name: "WOXSEN UNIVERSITY",
        degree: "Bachelors in Computer Science",
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
        name: "LEETCODE",
        url: "https://leetcode.com/u/sarvag/",
        number: "4",
      },
      // {
      //   name: "X / (twitter)",
      //   url: "https://x.com/strbvuks",
      //   number: "6",
      // },
      {
        name: "SPOTIFY",
        url: "https://open.spotify.com/user/nl8l3a15fcwt16ziq91rp82eq?si=x_g4W9_6SbqNENbHlJkjCg",
        number: "5",
      },
      {
        name: "LAST.FM",
        url: "https://www.last.fm/user/sarvag_kalari",
        number: "6",
      },
    ],
  },
};

export default data;
