const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

export const projectData = [
  {
    id: 1,
    title: "cyEngine",
    description: "A custom lightweight game engine being built from scratch in Modern C++. It's being developed using GLFW and OpenGL for low-level graphics control and 3D rendering.",
    technologies: [
      { name: "C++", icon: `${deviconBase}cplusplus/cplusplus-original.svg` },
      { name: "CMake", icon: `${deviconBase}cmake/cmake-original.svg` },
    ],
    githubUrl: "https://github.com/NateAsferi/cyengine",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This the website you're on! It showcases my skills, projects, and contact information in a clean, mobile-friendly design.",
    technologies: [
      { name: "HTML5", icon: `${deviconBase}html5/html5-original.svg` },
      { name: "CSS3", icon: `${deviconBase}css3/css3-original.svg` },
      { name: "JavaScript", icon: `${deviconBase}javascript/javascript-original.svg` },
    ],
    githubUrl: "https://github.com/NateAsferi/portfolio-site",
  },
  {
    id: 3,
    title: "BLIMP",
    description: "Writing code for a biologically inspired Unmanned Aerial Vehicle (UAV) blimp. This project focuses on novel navigation and control systems.",
    technologies: [
      { name: "C++", icon: `${deviconBase}cplusplus/cplusplus-original.svg` },
      { name: "Arduino", icon: `${deviconBase}arduino/arduino-original.svg` },
    ],
    githubUrl: "https://github.com/NateAsferi/blimp",
  },
];