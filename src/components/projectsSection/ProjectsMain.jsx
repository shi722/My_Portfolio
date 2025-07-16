import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'


const projects = [
{
    name: "Image-Background--Remover-web",
    year: "March 2023",
    align: "right",
    image: "images/listing.png",
    link: "https://shi722.github.io/Image-Background--Remover-web/",
},
{
    name: "Chat App",
    year: "March 2025",
    align: "left",
    image: "images/chat-app.png",
    link: "https://vaartalap-sdyd.onrender.com/",
},
{
    name: "Portfolio Website",
    year: "October 2024",
    align: "right",
    image: "images/project-1.png",
    link: "https://myportfoliowebs-shivanshu.netlify.app/",
},
];

const ProjectsMain = () => {
    return <div id='projects' className=" mx-auto px-4">
        <ProjectsText />
        <div className="flex flex-col gap-20 max-w-[70%] mx-auto mt-12">
            {projects.map((item, index) =>{
                return <motion.div
                variants={fadeIn(`${item.align}`, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                >
                    <SingleProject 
                    key={index} 
                    name={item.name} 
                    year={item.year} 
                    align={item.align} 
                    image={item.image} 
                    link={item.link} />
                </motion.div>
            })
            }
        </div>
    </div>
}

export default ProjectsMain