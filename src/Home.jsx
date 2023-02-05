import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Tab } from '@headlessui/react'
import NavBar from './Navbar';
import ProfileAvatar from './corey_muir_beach.jpg';
import Headshot from './headshot3.jpg';

import Button from './Button';
import InstagramIcon from './instagram_icon.png'
import LinkedInIcon from './linkedin_icon.png'
import GithubIcon from './github_icon.png'
import EmailIcon from './email_icon.png'
import { Link } from 'react-router-dom';




function Home() {

  //const testBackgroundUrl = '/User/coreycasmedes/Downloads/augustine-wong-3Om4DHcaAc0-unsplash.jpg';
  return (

    <div className="min-h-screen min-w-full ">
        <div className='grid grid-rows-5 grid-cols-1'>
            <div className='h-4/6 flex flex-col place-self-center'>

                <h1 className='font-assistant-extrabold text-6xl lg:text-8xl self-center'>Corey</h1>
                <h1 className='font-clean text-6xl lg:text-8xl self-center'>Casmedes</h1>
                <h1 className='self-center font-assistant-light'>Software Engineer</h1>
            
                <div className='my-24 flex gap-0 lg:gap-8 lg:divide-x-2'>
                    
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
                </div>

            </div>

            <div className=' bg-black flex flex-col lg:flex-row items-center row-span-1'>
                <img src={ProfileAvatar} className='rounded-2xl w-60 h-60 lg:w-96 lg:h-96 my-28 mx-28 border-4'></img>
                <div className='text-white text-xs lg:text-lg font-assistant-light pr-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla autem, adipisci laborum consequuntur neque ab quisquam maxime provident consequatur eveniet velit voluptas dolorum? Officiis quasi hic molestiae neque. Aspernatur, natus.</div>
            </div>

            <div className='row-span-1 flex justify-center items-center'>
            
                <div className=' w-4/6 border-2 p-9 rounded-lg shadow-lg flex flex-wrap justify-center items-center'>
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam magnam et nisi distinctio, repellat ratione beatae, harum voluptatem maiores tempora impedit pariatur quos, amet ea nostrum recusandae temporibus ad iusto Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dicta quam praesentium incidunt, fugit eaque provident, unde consectetur tenetur eum laudantium perspiciatis! Exercitationem ex nisi similique voluptatem. Iure, dolores mollitia!</p>
                    <a href='https://patentcenter.uspto.gov/applications/17111933' className='flex justify-around text-white w-36 h-8 my-4 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...'>
                    
                        <button className='font-assistant-extrabold'>US-11516295-B1</button>
                    </a>
                </div>
            </div>

            <div className=' bg-purple-600 flex flex-col lg:flex-row row-span-1 justify-around items-center'>
                <div className='text-white text-sm lg:text-lg font-clean w-3/6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla autem, adipisci laborum consequuntur neque ab quisquam maxime provident consequatur eveniet velit voluptas dolorum? Officiis quasi hic molestiae neque. Aspernatur, natus.</div>
                <img src={Headshot} className='rounded-full w-96 border-8' />
            </div>

        </div>

    </div>


  
  );
}

export default Home;
