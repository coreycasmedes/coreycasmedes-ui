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

        <div className='flex bg-black text-white p-12 justify-around'>
            <div className='flex flex-col'>

                <div className="z-10 mt-8">
                    <div className='flex flex-col items-center'>
                        <h1 className='font-assistant-extrabold text-6xl lg:text-8xl '>Corey</h1>
                        <h1 className='font-clean text-6xl lg:text-8xl'>Casmedes</h1>
                        <h1 className='self-center font-assistant-light'>Software Engineer</h1>
                    </div>

                    <div className="typewriter my-12">
                        <h1 style={{maxWidth: '312px'}} className="font-mono animate-typing mb-4">Building cool software</h1>
                        <h1 style={{maxWidth: '120px'}} className="font-mono animate-typing">Cruise 🚘</h1>
                        <h1 style={{maxWidth: '110px'}} className="font-mono animate-typing">Apple 📱</h1>
                        <h1 style={{maxWidth: '184px'}} className="font-mono animate-typing">Capital One 🏦</h1>
                        <h1 style={{maxWidth: '168px'}} className="font-mono animate-typing">State Farm 📃</h1>
                    </div>
                </div>
            
            </div>
            <img src={Headshot} className='absolute sm:relative w-56 sm:w-72 opacity-70 sm:opacity-100' />
        </div>



  
  );
}

export default Home;
