// // import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import logo from "../assets/kevinRushLogo.png"


// const Navbar = () => {
//     return (
        
//       <nav className="mb-20 flex items-center justify-between py-6">
//         <div className="flex flex-shrink-0 items-center">
//           <img className = "mx-2 w-10" src={logo} alt="logo" />
//         </div>
//         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//           {/* <FaLinkedin /> */}
//           <a href="https://www.linkedin.com/in/pranavpr03/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://github.com/PRP2003" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           {/* <a href="https://www.linkedin.com/in/pranavpr03/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
//           <a href="https://x.com/PranavR32984964" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
//         </div>
//       </nav>
//     );
//   };

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/pranavpr03/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/PRP2003" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://x.com/PranavR32984964" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com/pranav_p_r_03/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
        </nav>
    );
};

const Introduction = () => {
    return (
        <div className="text-center">
            {/* <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/pranavpr03/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/PRP2003" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://x.com/PranavR32984964" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com/pranav_p_r_03/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div> */}
            <h1 className="text-4xl font-bold mt-4"> 👋🏽 Hey there,<br />It's Pranav P R.</h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto">Welcome to my personal portfolio website! </p>
            <div className="mt-8 flex justify-center space-x-4">
                {/* <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-full">Say Hello</button> */}
                {/* <button  */}
                <a 
                    href="/Pranav CV_.pdf" 
                    download="Pranav Resume.pdf" 
                    className="mt-4  inline-block bg--500 text-white py-1 px-4 rounded-full">
                    <button className="border bg-gradient-to-r from-purple-400 to-purple-600 border-gray-300 px-6 py-3 rounded-full">Download Resume</button>
                </a>
                {/* >My Portfolio</button> */}
                
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Navbar />
            <Introduction />
        </div>
    );
};

export default App;


