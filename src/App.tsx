import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Tab } from '@headlessui/react'
import Example from './Example';
import NavBar from './Navbar';



function App() {
  return (

    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Example />
      </div>

    </div>
  );
}

export default App;
