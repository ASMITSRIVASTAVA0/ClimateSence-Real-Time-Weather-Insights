import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from '@mui/material/Button';
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send";

// import SearchBox from "./SearchBox.jsx"
// import InfoBox from "./InfoBox.jsx";
import WeatherApp from './WeatherApp';

function App() {
  

  return (
    <>
      {/* <SearchBox/> */}
    
      <WeatherApp/>
      
    </>
  )
}

export default App
