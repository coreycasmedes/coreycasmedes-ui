import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Tab } from '@headlessui/react'
import NavBar from './Navbar';
import ProfileAvatar from './corey_muir_beach.jpg';
import InstagramIcon from './instagram_icon.png'
import LinkedInIcon from './linkedin_icon.png'
import GithubIcon from './github_icon.png'
import EmailIcon from './email_icon.png'
import { Link } from 'react-router-dom';
import {
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Home';
import Resume from './Resume';
//import ResumePdf from './CoreyCasmedesFall2022.pdf';




const App: React.FC = () => {

  //const testBackgroundUrl = '/User/coreycasmedes/Downloads/augustine-wong-3Om4DHcaAc0-unsplash.jpg';
  return (

    <div className="flex flex-col min-h-screen text-white bg-black">

      <div className='flex justify-center md:pr-16 sticky top-0  w-full h-20 backdrop-blur-sm'>
        
        <ul className='flex items-center gap-0 md:gap-8'>
          <li className=' px-2 py-1 font-assistant-light  ml-4 rounded-md hover:bg-gray-300'>
            <Link to="">Home</Link>
          </li>
          <li className='px-2 py-1 font-assistant-light  ml-4 rounded-md hover:bg-gray-300'>
            <Link 
              to="/"
            >
              Resume
            </Link>
          </li>
          <li className='px-2 py-1 font-assistant-light  ml-4 rounded-md hover:bg-gray-300'>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>

    
      <div className='flex-grow flex-shrink-0 basis-auto'>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>


      <div className='flex justify-center flex-shrink-0 my-12 sm:my-6'>
          
          <div className='flex items-center pl-0 lg:pl-8'>
              <a href='https://www.instagram.com/coreycasmedes/' className='px-2'>
                  <img src={InstagramIcon} className='rounded-full w-8 lg:w-9 border-white border bg-white'></img>
              </a>
          </div>

          <div className='flex items-center pl-0'>
              <a href='https://www.instagram.com/coreycasmedes/' className='px-2'>
                  <img src={GithubIcon} className='rounded-full w-8 lg:w-9 border-white border bg-white'></img>
              </a>
          </div>

          <div className='flex items-center pl-0 fill-white'>
              <a href='https://www.instagram.com/coreycasmedes/' className='px-2'>
                  <img src={LinkedInIcon} className='rounded-full w-8 lg:w-9 border-white border bg-white'></img>
              </a>
          </div>

          <div className='flex items-center pl-0 '>
              <a href='https://www.instagram.com/coreycasmedes/' className='px-2'>
                  <img src={EmailIcon} className='rounded-full w-8 lg:w-9 border-white border'></img>
              </a>
          </div>
      </div>
    </div>
  );
}

export default App;
