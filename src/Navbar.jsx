import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import Resume from './Resume';
import ProfileAvatar from './corey_muir_beach.jpg';
//import LinkedinLogo from './linkedin_icon.svg';
import InstagramIcon from './instagram_icon.png'
import LinkedInIcon from './linkedin_icon.png'
import GithubIcon from './github_icon.png'
import EmailIcon from './email_icon.png'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function NavBar() {

    const [categories, setCategories] = useState([
        'Home', 'Resume', 'Projects'
    ]);


    return (

        <div className="w-full px-2 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex-shrink rounded-xl p-1">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            className={classNames(
                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white"                            )}
                        >
                            {category}
                        </Tab>
                    ))}
             
                </Tab.List>
                <Tab.Panels>
                <Tab.Panel>
                    <div className='grid place-items-center pt-24'>
                        <div>
                            <img src={ProfileAvatar} className='rounded-full w-96'></img>
                        </div>
                        <div className='flex space-x-2.5 my-4'>
                            <a href='https://www.instagram.com/coreycasmedes/'>
                                <img src={InstagramIcon} className='rounded-full w-9'></img>
                            </a>
                            <a href='https://www.linkedin.com/in/coreycasmedes/'>
                                <img src={LinkedInIcon} className='rounded-full w-9'></img>
                            </a>
                            <a href='https://github.com/coreycasmedes'>
                                <img src={GithubIcon} className='rounded-full w-9'></img>
                            </a>
                            <a href='mailto:ccasmedes3@gmail.com'>
                                <img src={EmailIcon} className='rounded-full w-9'></img>
                            </a>
                            
                        </div>

                        
                    </div>
                
                </Tab.Panel>
                <Tab.Panel>
                    <Resume />
                </Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
                </Tab.Group>
        </div>

    );
}

export default NavBar