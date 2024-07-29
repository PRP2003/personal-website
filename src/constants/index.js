import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Research Intern",
    company: "Indian Institute of Technology, Madras.",
    description: `Conducted simulations of an inverted pendulum system using Python and MATLAB, including defining parameters, state space modeling, and solving differential equations. Performed stability analysis of the system using Routh-Hurwitz stability criteria to ensure that the system remains stable under different conditions. Developed and implemented a PID controller to stabilize the inverted pendulum, including tuning the proportional, integral, and derivative gains for optimal system performance.`,
    skills: ["Fusion 360", "Matlab", "Python", "Simulink", "Latex","Literature Review"],
  },
  {
    year: "Jan 2024 - March 2024",
    role: "Intern",
    company: "Expanse Cosmos Private Limited",
    description: `Collaborated with a team to develop self-pressurizing propellant systems for producing a 1 kN thrust rocket engine, including conducting flow simulations for 3D CAD models. Developed a MATLAB Simulink model to predict pressure drop across the feed line system and analyze thrust rate over time.`,
    skills: ["Solidworks", "Ansys Fluent", "Ansys Workbench", "Matlab"],
  },
  {
    year: "Dec 2023 - Jan 2024",
    role: "Industrial Internhip Trainee",
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
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      skills: ["HTML", "CSS", "Angular", "Firebase"],
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
  email: "me21b1064@iiitdm.ac.in",
};
