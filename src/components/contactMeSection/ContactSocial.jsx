import React from 'react'
import SingleContactSocials from './SingleContactSocials'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocials Link="https://leetcode.com/u/Shivanshu_Solanki/" Icon={SiLeetcode} />
        <SingleContactSocials Link="https://github.com/shi722" Icon={FaGithub} />
        <SingleContactSocials Link="https://www.linkedin.com/in/shivanshu-solanki-16292a248/" Icon={FaLinkedin} />
    </div>
  )
}

export default ContactSocial