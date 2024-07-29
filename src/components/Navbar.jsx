// import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png"


const Navbar = () => {
    return (
        
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className = "mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/* <FaLinkedin /> */}
          <a href="https://www.linkedin.com/in/pranavpr03/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/PRP2003" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          {/* <a href="https://www.linkedin.com/in/pranavpr03/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
          <a href="https://x.com/PranavR32984964" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
        </div>
      </nav>
    );
  };

export default Navbar;
