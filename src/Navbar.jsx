import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import Resume from './Resume';

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
                <Tab.List className="flex rounded-xl p-1">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            className={classNames(
                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-600 ring-white ring-opacity-60",
                                 "ring-offset-2 ring-offset-grey ring-offset-stone-600 focus:outline-none focus:ring-2"
                            )}
                        >
                            {category}
                        </Tab>
                    ))}
             
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <Resume />
                    </Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
                </Tab.Group>
        </div>

    );
}

export default NavBar