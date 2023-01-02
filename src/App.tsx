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




function App() {

  //const testBackgroundUrl = '/User/coreycasmedes/Downloads/augustine-wong-3Om4DHcaAc0-unsplash.jpg';
  return (

    <div className="min-h-screen min-w-full ">
      <div className='grid grid-cols-2 grid-rows-2 gap-8 py-4 px-4 rounded-xl bg-gradient-to-br from-slate-400 to-slate-900 mx-36 my-36'>
        <div className='col-span-1 row-span-1'>
            <img src={ProfileAvatar} className='rounded-3xl w-56 h-56 '></img>
            <div className='flex flex-col'>
              <h1 className="text-white font-clean text-2xl font-extralight justify-center self-center">Corey Casmedes</h1>
              <h1 className="text-white  font-light text-md italic self-center">Software Engineer</h1>
            </div>
        </div>
        
        <p className='col-span-1 row-span-1 shadow-2xl font-clean bg-slate-400 rounded-3xl'>
          <h1 className='font-assistant-extrabold'>Corey</h1>
          <h1>Caasmedes</h1>
        </p> 
        <p className='col-span-1 row-span-1 shadow-2xl font-clean bg-slate-400 rounded-3xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </p>
        <p className='col-span-1 row-span-1 shadow-2xl font-clean bg-slate-400 rounded-3xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </p>


      </div>
      {/* <div >
        <NavBar />
      </div> */}

      {/* <div className='flex justify-between'>
        <button>about</button>
        <button>resumes</button>
        <button>projects</button>
      </div> */}

      

      {/* <div className="flex items-center justify-between m-4">
        <h1>Corey Casmedes</h1>
        <div>
          <Button buttonText="Home"></Button>
          <Button buttonText="About"></Button>
          <Button buttonText="Resume"></Button>
          <Button buttonText="Projects"></Button>
        </div>
      </div> */}

      {/* <div className='grid place-items-center'>
        <img src={ProfileAvatar} className='rounded-full w-72 scale-125'></img>
      </div> */}

      {/* <div className="my-24 flex flex-col items-center">
        <img src={ProfileAvatar} className='rounded-full w-60 scale-125'></img>
        <div className='w-96 h-96 bg-gradient-to-b border-slate-400 border-2 from-gray-300 to-slate-600 rounded-xl grid place-items-center grid-cols-4 grid-rows-4 my-2'>
          
          <div className='col-span-4 flex-row place-items-center justify-around justify-items-center '>
            <h1 className="text-white font-clean text-2xl font-extralight">Corey Casmedes</h1>
            <h1 className="text-white  font-light text-lg italic">Software Engineer</h1>
          </div>
          
          <div className='bg-gradient-to-r from-orange-400 to-pink-400 col-span-1 w-14 h-14 rounded-xl flex justify-center items-center shadow-3xl'>
            <a href='https://www.instagram.com/coreycasmedes/' className=''>
              <img src={InstagramIcon} className='rounded-full w-9'></img>
            </a>

          </div>
          <div className='bg-gradient-to-r from-blue-600 to-white col-span-1 w-14 h-14 rounded-xl flex justify-center items-center shadow-3xl'>
            <a href='https://www.instagram.com/coreycasmedes/' className=''>
              <img src={LinkedInIcon} className='rounded-full w-9'></img>
            </a>

          </div>
          <div className='bg-gradient-to-r from-orange-400 to-pink-400 col-span-1 w-14 h-14 rounded-xl flex justify-center items-center shadow-3xl'>
            <a href='https://www.instagram.com/coreycasmedes/' className=''>
              <img src={GithubIcon} className='rounded-full w-9'></img>
            </a>

          </div>
          <div className='bg-gradient-to-r from-orange-400 to-pink-400 col-span-1 w-14 h-14 rounded-xl flex justify-center items-center shadow-3xl'>
            <a href='https://www.instagram.com/coreycasmedes/' className=''>
              <img src={EmailIcon} className='rounded-full w-9'></img>
            </a>

          </div>
          

        </div>
      </div> */}



    </div>
  );
}

export default App;
