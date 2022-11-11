import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
//import { setTimeout } from 'timers/promises';

import AppleIcon from './apple_icon.png'

function AppleLogoTransition() {
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    setTimeout(2000).then(setIsShowing);
    setIsShowing(true);
  }, []);

  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        I will fade in and out
      </Transition>
    </>
  )
}

export default AppleLogoTransition;
