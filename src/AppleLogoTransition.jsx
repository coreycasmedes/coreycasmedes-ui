import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
//import { setTimeout } from 'timers/promises';

import AppleIcon from './apple_icon.png'

function AppleLogoTransition() {
  const [isShowing, setIsShowing] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsShowing(false), 2000)
    // setTimeout(2000).then(setIsShowing);
    // setIsShowing(true);
  }, []);

  return (
    <div>
        {isShowing ?
        (
        <div className='font-mono flex flex-row '>
          <p className="animate-bounce">.</p>
          <p className="animate-bounce">.</p>
          <p className="animate-bounce">.</p>
        </div> ) : (
            <img src={AppleIcon} className="w-4 ease-in duration-1000"></img>
            )
          }
    </div>
    // <>
    //   <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
    //     Toggle
    //   </button>
    //   <Transition
    //     show={isShowing}
    //     enter="transition-opacity duration-75"
    //     enterFrom="opacity-0"
    //     enterTo="opacity-100"
    //     leave="transition-opacity duration-150"
    //     leaveFrom="opacity-100"
    //     leaveTo="opacity-0"
    //   >
    //     <img src={AppleIcon} className="w-9"></img>
    //   </Transition>
    // </>
  )
}

export default AppleLogoTransition;
