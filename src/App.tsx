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

    <div className="min-h-screen min-w-full bg-slate-800">
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

      <div className="my-24 flex flex-col items-center">
        <img src={ProfileAvatar} className='rounded-full w-60 scale-125'></img>
        <div className='w-96 h-96 bg-gradient-to-b border-slate-400 border-2 from-gray-300 to-slate-600 rounded-xl grid place-items-center grid-cols-4 grid-rows-4 my-2'>
          
          <div className='col-span-4 flex-row place-items-center justify-around justify-items-center '>
            <h1 className="text-white  font-roboto text-2xl font-extralight">Corey Casmedes</h1>
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
      </div>



    </div>
  );
}

export default App;
