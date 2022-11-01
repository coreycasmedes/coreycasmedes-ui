import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Tab } from '@headlessui/react'
import Example from './Example';
import NavBar from './Navbar';



function App() {
  return (

    <div className="min-h-screen min-w-full bg-[url('../public/keyboard_and_coffee_tech.jpg')] bg-cover bg-fixed">
      <div >
        <NavBar />
      </div>

    </div>
  );
}

export default App;
