import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"
const Social = () => {
    
  return (
    <div className='w-full flex justify-stretch flex-row bottom-0 bg-inherit'>
        <ul className='w-1/2 mx-auto flex justify-stretch flex-row text-center md:mr-1 md:w-2/3'>
            <li className='flex justify-between items-center w-1/4 h-14 px-0.5
            bg-inherit hover:scale-105 duration-300'>
                <a href="https://www.linkedin.com/in/mayank-bansal-5650b0251/" className='flex justify-between items-center w-full text-white' target="_blank" rel='noreferrer'> 
                <FaLinkedin size={50}/>
               
                </a>
            </li>

            <li className='flex justify-between items-center w-1/4 h-14 px-0.5
            bg-inherit  hover:scale-105 duration-300'>
                <a href="https://github.com/Bansal0527" className='flex justify-between items-center w-full text-white' target="_blank" rel='noreferrer'> 
            
              <FaGithub size={50}/>
                
                </a>
            </li>

            <li className='flex justify-between items-center w-1/4 h-14 px-0.5
            bg-inherit  hover:scale-105 duration-300'>
                <a href="mailto:b22cs070@iitj.ac.in" className='flex justify-between items-center w-full text-white' target="_blank" rel='noreferrer'> 
                
                 <HiOutlineMail className="inline text-center" size={50}/>
                
                </a>
            </li>

            <li className='flex justify-between items-center w-1/4 h-14 px-0.5
            bg-inherit  hover:scale-105 duration-300'>
                <a href="https://drive.google.com/file/d/1TZdR3PzgikCK0KExiWBbsnhC1StKK1GS/view?usp=sharing" className='flex justify-between items-center w-full text-white' download={true} target="_blank"> 
                
                 <BsFillPersonLinesFill size={50}/>
                
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Social
