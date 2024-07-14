import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook ,FaYoutube,FaInstagram,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   <>
   <footer>
    <Link to={""}>
    <FaFacebook/></Link>
    <Link to={""}><FaInstagram/></Link>
    <Link to={""}><FaYoutube/></Link>
    <Link to={""}><FaLinkedin/></Link>
   </footer>
   </>
  )
}

export default Footer