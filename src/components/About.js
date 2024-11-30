import React from 'react'

const About = () => {
  return (
    <div id="about" name="about" className='w-full h-full bg-gradient-to-b from-gray-800  to-black
    text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                 About  
                </p>
            </div>
            <p className='text-xl mt-15'>
            Welcome folks!
I'm Mayank Bansal, a Computer Science and Engineering student at IIT Jodhpur (Pre-Final Year) with a GPA of 7.48. I specialize in data structures, algorithms, and full-stack development using frameworks like React, Next.js, Flask, and Django, alongside databases like MongoDB and PostgreSQL.

My projects include:

An ED-Tech Platform with integrated payments for students and instructors.
An AI-powered IITJ Chatbot using Langchain and Google’s PaLM model.
A Movie Recommendation System using machine learning for personalized suggestions.
As part of IITJ’s Career Development Cell, I revamped the website and built an admin portal to streamline placements.

Feel free to connect if you share similar interests or have opportunities to collaborate!
 <br/>
Best regards.

            </p>
        </div>
    </div>
  )
}

export default About
