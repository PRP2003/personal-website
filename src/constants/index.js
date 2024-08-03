import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello! I'm Pranav P R, a dedicated engineering student at the Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram, Chennai. With a solid academic foundation and hands-on experience through internships at renowed research institute and leading aerospace company, I've honed my skills in software like MATLAB, Python, Solidworks, and Ansys Fluent & Workbench. My involvement in the Mars Rover Club and various research projects has enhanced my expertise in computational fluid dynamics, control systems, and CAD modeling. I am passionate about continuous learning and professional growth, and I'm excited to share my journey and projects on my personal website. Let's connect and explore the world of mechanical engineering together!  `;

export const ABOUT_TEXT = `I am a dedicated engineering student at the Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram, Chennai. With a solid academic foundation and hands-on experience through internships at renowed research institute and leading aerospace company, I've honed my skills in software like MATLAB, Python, Solidworks, and Ansys Fluent & Workbench. My involvement in the Mars Rover Club and various research projects has enhanced my expertise in computational fluid dynamics, control systems, and CAD modeling. I am passionate about continuous learning and professional growth, and I'm excited to share my journey and projects on my personal website. Let's connect and explore the world of mechanical engineering together!`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Research Intern",
    company: "Indian Institute of Technology, Madras.",
    description: `Conducted simulations of an inverted pendulum system using Python and MATLAB, including defining parameters, state space modeling, and solving differential equations. Performed stability analysis of the system using Routh-Hurwitz stability criteria to ensure that the system remains stable under different conditions. Developed and implemented a PID controller to stabilize the inverted pendulum, including tuning the proportional, integral, and derivative gains for optimal system performance.`,
    skills: ["Fusion 360", "Matlab", "Python", "Simulink", "Latex","Literature Review"],
  },
  // {
  //   year: "Jan 2024 - March 2024",
  //   role: "Intern",
  //   company: "Expanse Cosmos Private Limited",
  //   description: `Collaborated with a team to develop self-pressurizing propellant systems for producing a 1 kN thrust rocket engine, including conducting flow simulations for 3D CAD models. Developed a MATLAB Simulink model to predict pressure drop across the feed line system and analyze thrust rate over time.`,
  //   skills: ["Solidworks", "Ansys Fluent", "Ansys Workbench", "Matlab"],
  // },
  {
    year: "Dec 2023 - Jan 2024",
    role: "Industrial Internship Trainee",
    company: "Aerospace Division, Hindustan Aeronautics Limited.",
    description: `Got a Real-time Exposure in Realization of Parts for Rocket Structures like PSLV, GSLV MKII, MKIII. Closely worked with Quality Control Manager (MKIII Department) to inspect the Strap on base Shroud Structures, Nose-cone Adaptor of GSLV MKIII as per the Engineering Drawings. Documented the errors present in the workings and submitted as a SNAG sheet to implement the process of rework.`,
    skills: ["Quality Control", "Engineering Drawing", "AS9100D"],
  },
  {
    year: "Aug 2023 - Dec 2023",
    role: "Research Intern",
    company: "IIITDM Kancheepuram, Chennai.",
    description: `Investigated shock wave occurrence in supersonic nozzles under Dr. Jayavel S's guidance, contributing to the optimization of rocket nozzle systems. Developed a 2D computational domain based on experimental test nozzles and performed Computational Fluid Dynamics (CFD) analysis to study shock wave effects on rocket engine performance, including validation with experimental results. Conducted a grid independence test for the 2D computational domain and evaluated CFD simulations for different Nozzle Pressure Ratios (NPR), comparing them with experimental data. Proposed a new second throat nozzle design and studied its impact on flow separation in Converging-Diverging (CD) nozzles. Developed a Python program to solve compressible flow relations, including normal shock, isentropic flow, and oblique shock relations, and prepared a manuscript titled "Effects of Second Throat in Converging Diverging Supersonic Nozzle".`,
    skills: ["Ansys Fluent", "ICEM CFD", "Proptools(Python)", "Solidworks", "Literature Review", "Origin pro"],
  },
  {
    year: "March 2023 - Aug 2023",
    role: "Research Project Member",
    company: "Space Generation Advisory Council, Small Satellites Project Group.",
    description: `Completed literature analysis on the effects of winds on small satellite observation and documented the findings. Generated the mass and cost budgets for a 6U Cube-Sat and developed its CAD model, including conducting initial structural analysis.`,
    skills: ["Literature review", "Python", "Ansys Workbench", "Solidworks"],
  },
  {
    year: "Aug 2022 - Aug 2023",
    role: "Mechanical Team Member",
    company: "Mars Research Station(MaRS) club, IIITDM Kancheepuram, Chennai.",
    description: `As team member, Designed the Robotic Gripper for the manipulation task, Wheels for Rover. Helped the team to complete the Autonomous Navigation Mars Rover Fabrication. Designed Rover's Wheel CAD Model with help of Generative Design in Fusion 360. Worked with the cross-functional teams to Manufacture Rover Parts through various Manufacturing Processes.`,
    skills: ["Solidworks", "Fusion 360", "3D Printing", "CAD Modelling", "Teamwork"],
  },
];

export const PROJECTS = [
  {
    title: "CFD Optimization of Convergent-Divergent Nozzle",
    image: project1,
    description:
      "Conducted a computational study of a 2D converging-diverging supersonic nozzle with divergent angles of 5, 7, 10, 13, and 15 degrees, using gases produced by liquid oxygen and liquid propane. The study utilized CANTERA software for gas properties, finding that a 15-degree angle showed good performance without shock waves. Various contour and plot results (pressure, velocity, Mach number, temperature) were generated for all six cases.",
      skills: ["Solidworks", "Ansys Fluent", "Ansys Workbench", "ICEM CFD", "Proptools(Python)"],
  },
  {
    title: "Acrylic Sheet Smartphone Stand ",
    image: project2,
    description:
      "Led a team of 5 members and manufactured 100+ Phone Stand using Acrylic Sheet for presenting as a Gift for Alumni as part of 6th Alumni meet and 10th Convocation of our institute.",
      skills: ["Autodesk AutoCAD", "CSSLaser - Beam Machining", "Bending"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //     skills: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //     skills: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Ashwatha Hostel, Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram, Chennai.",
  phoneNo: "+91 9488572668",
  email: "pranaviiitdm03@gmail.com",
};
