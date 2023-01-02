import ProfileAvatar from './corey_muir_beach.jpg';
import InstagramIcon from './instagram_icon.png'
import LinkedInIcon from './linkedin_icon.png'
import GithubIcon from './github_icon.png'
import EmailIcon from './email_icon.png'
import AppleLogoTransition from './AppleLogoTransition';
import AppleIcon from './apple_icon.png'
import Example from './Rive';

function Home() {


    return (
        <div>
            <div className='grid place-items-center pt-24'>
                <div>
                    <img src={ProfileAvatar} className='rounded-full w-96 scale-125 ease-in duration-200 overflow-hidden inline-block'></img>
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
                    <a href='mailto:palmate-nibs.0h@icloud.com'>
                        <img src={EmailIcon} className='rounded-full w-9'></img>
                    </a>
                </div>
            </div>
            <div className=' min-h-full min-w-full'>
            <Example />
            </div>
            
        </div>

         
    );
}

export default Home;