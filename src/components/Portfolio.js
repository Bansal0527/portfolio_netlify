import React from 'react'
import chatbot from "./images/chatbot.png"
import movie from "./images/movier.png"
import ed from "./images/ed.png"
const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: chatbot,
            link:"https://github.com/Bansal0527/IITJ-ChatBot",
            title:"Chatbot using Langchain and LlamaIndex"
        },
        {
            id:2,
            src: ed,
            link:"https://github.com/Bansal0527/MERN-ED-tech",
            title:"MERN stack ED tech platform.",
            website:"https://mern-ed-tech-two.vercel.app/"
        },
        {
            id:3,
            src: movie,
            link:"https://github.com/Bansal0527/Movie-Recomendation-System",
            title:"Movie recommendation system."
        }
        

    ]

    
  return (
    <div id="portfolio" name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full box-border
    text-white md:h-full px-8'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col
       justify-center w-full h-full'>
       <div className='pb-8'>
       <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
           Portfolio
       </p>
        <p className='py-6'> 

        </p>
       </div>
      </div> 
      
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-12
      sm:px-0'>
{portfolios.map(({ id, src, link, title, website }) => (
  <div key={id} className="shadow-md shadow-gray-600 rounded-lg mx-auto max-w-m">
    <img
      src={src}
      alt=""
      className="rounded-md duration-200 hover:scale-105 w-full h-48"
    />
    <div className="flex flex-col items-center justify-center">
      <h3 className="m-2">{title}</h3>
      <div className="flex justify-center w-full space-x-4 border-t-2 border-gray-400 py-3">
        {link && (
          <button className="px-6 py-2 duration-200 hover:scale-105 bg-gray-700 text-white rounded">
            <a href={link} target="_blank" rel="noreferrer">
              Code
            </a>
          </button>
        )}
        {website && (
          <button className="px-6 py-2 duration-200 hover:scale-105 bg-blue-500 text-white rounded">
            <a href={website} target="_blank" rel="noreferrer">
              Website
            </a>
          </button>
        )}
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  )
}

export default Portfolio
