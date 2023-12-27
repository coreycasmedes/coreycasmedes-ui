import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Tab } from '@headlessui/react'
import NavBar from './Navbar';
import ProfileAvatar from './corey_muir_beach.jpg';
//import Headshot from './img_v2.png';
import Headshot from './img_v2_grayscale.png';
//import Headshot from './full_length_no_background_blurred.png

import Button from './Button';
import InstagramIcon from './instagram_icon.png'
import LinkedInIcon from './linkedin_icon.png'
import GithubIcon from './github_icon.png'
import EmailIcon from './email_icon.png'
import { Link } from 'react-router-dom';

// ccd5ae
// e9edc9
// fefae0
// faedcd
// d4a373

// /* Array */
// ["ccd5ae","e9edc9","fefae0","faedcd","d4a373"]



function Home() {

  //const testBackgroundUrl = '/User/coreycasmedes/Downloads/augustine-wong-3Om4DHcaAc0-unsplash.jpg';
  return (

    <div className="min-w-full">
        <div className='grid grid-rows-4 grid-cols-1'>
            <div className='flex bg-black text-white p-12 justify-around'>
                <div className='flex flex-col place-self-center'>

                    <h1 className='font-assistant-extrabold text-6xl lg:text-8xl self-center'>Corey</h1>
                    <h1 className='font-clean text-6xl lg:text-8xl self-center'>Casmedes</h1>
                    <h1 className='self-center font-assistant-light'>Software Engineer</h1>

                    <div className="typewriter my-12">
                        <h1 style={{maxWidth: '312px'}} className="font-mono animate-typing mb-4">Building cool software @</h1>
                        <h1 style={{maxWidth: '120px'}} className="font-mono animate-typing">Cruise 🚘</h1>
                        <h1 style={{maxWidth: '110px'}} className="font-mono animate-typing">Apple 📱</h1>
                        <h1 style={{maxWidth: '184px'}} className="font-mono animate-typing">Capital One 🏦</h1>
                        <h1 style={{maxWidth: '168px'}} className="font-mono animate-typing">State Farm 📃</h1>
                    </div>







                    {/* <div className='my-12 flex gap-0 lg:gap-8 lg:divide-x-2'>
                        
                        <div className='flex items-center pl-0 lg:pl-8'>
                            <a href='https://www.instagram.com/coreycasmedes/' className='px-2'>
                                <img src={InstagramIcon} className='rounded-full w-8 lg:w-9'></img>
                            </a>
                            <h1 className='font-clean invisible lg:visible w-0 lg:w-full'>Instagram</h1>
                        </div>

                        <div className='flex items-center pl-0 lg:pl-8'>
                            <a href='https://www.instagram.com/coreycasmedes/' className='px-2'>
                                <img src={GithubIcon} className='rounded-full w-8 lg:w-9'></img>
                            </a>
                            <h1 className='font-clean invisible lg:visible w-0 lg:w-full'>Github</h1>
                        </div>

                        <div className='flex items-center pl-0 lg:pl-8'>
                            <a href='https://www.instagram.com/coreycasmedes/' className='px-2'>
                                <img src={LinkedInIcon} className='rounded-full w-8 lg:w-9'></img>
                            </a>
                            <h1 className='font-clean invisible lg:visible w-0 lg:w-full'>LinkedIn</h1>
                        </div>

                        <div className='flex items-center pl-0  lg:pl-8'>
                            <a href='https://www.instagram.com/coreycasmedes/' className='px-2'>
                                <img src={EmailIcon} className='rounded-full w-8 lg:w-9'></img>
                            </a>
                            <h1 className='font-clean invisible lg:visible w-0 lg:w-full'>Email</h1>
                        </div>
                    </div> */}
                    


                </div>
                <img src={Headshot} className=' w-80' />
            </div>
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='bg-black'>
  <path fill="#fff" d="M0,256L60,234.7C120,213,240,171,360,149.3C480,128,600,128,720,144C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg> */}



            <div className='bg-black flex flex-col lg:flex-row items-center row-span-1'>
                <ul>
                    <li>linkedin</li>
                    <li>twitter</li>
                    <li>github</li>
                </ul>
            </div>

            <div className='row-span-1 flex justify-center items-center'>
            
                <div className=' w-4/6 border-2 p-9 rounded-lg shadow-lg flex flex-wrap justify-center items-center'>
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam magnam et nisi distinctio, repellat ratione beatae, harum voluptatem maiores tempora impedit pariatur quos, amet ea nostrum recusandae temporibus ad iusto Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dicta quam praesentium incidunt, fugit eaque provident, unde consectetur tenetur eum laudantium perspiciatis! Exercitationem ex nisi similique voluptatem. Iure, dolores mollitia!</p>
                    <a href='https://patentcenter.uspto.gov/applications/17111933' className='flex justify-around text-white w-36 h-8 my-4 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...'>
                    
                        <button className='font-assistant-extrabold'>US-11516295-B1</button>
                    </a>
                </div>
            </div>

            <div className=' bg-black  flex flex-col lg:flex-row row-span-1 justify-around items-center p-10'>
                <div className='text-white text-sm lg:text-lg font-clean w-3/6'>Corey Casmedes
                ive built cool things at
                cruise 🚘 apple 📱 capitalone 🏦</div>
                <img src={Headshot} className='w-80' />
            </div>

        </div>

    </div>


  
  );
}

export default Home;
