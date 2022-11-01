import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Tab } from '@headlessui/react'
import NavBar from './Navbar';



function App() {

  //const testBackgroundUrl = '/User/coreycasmedes/Downloads/augustine-wong-3Om4DHcaAc0-unsplash.jpg';
  return (

    <div className="min-h-screen min-w-full bg-[url('../public/keyboard_and_coffee_tech.jpg')] bg-cover bg-fixed">
      <div >
        <NavBar />
      </div>

    </div>
  );
}

export default App;
