import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Tab } from '@headlessui/react'
import NavBar from './Navbar';
import ProfileAvatar from './corey_muir_beach.jpg';
import Button from './Button';
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

    <div className="min-h-screen min-w-full text-white bg-black">

      <div className='flex justify-center md:pr-16 sticky top-0  w-full h-20 backdrop-blur-sm'>
        
        <ul className='flex items-center gap-0 md:gap-8'>
          <li className=' px-2 py-1 font-assistant-light  ml-4 rounded-md hover:bg-gray-300'>
            <Link to="/coreycasmedes-ui">Home</Link>
          </li>
          <li className='px-2 py-1 font-assistant-light  ml-4 rounded-md hover:bg-gray-300'>
            <Link to="/" onClick={() => {window.open(require('./CoreyCasmedesFall2022.pdf'))}}>Resume</Link>
          </li>
          <li className='px-2 py-1 font-assistant-light  ml-4 rounded-md hover:bg-gray-300'>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        </div>

      
        <Routes>
          <Route path="coreycasmedes-ui" element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      

    </div>
  );
}

export default App;
