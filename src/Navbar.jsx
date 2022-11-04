import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import Resume from './Resume';
import Home from './Home';



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
                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black outline-none"                            )}
                        >
                            {category}
                        </Tab>
                    ))}
             
                </Tab.List>
                <Tab.Panels>
                <Tab.Panel>
                    <Home />
                
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