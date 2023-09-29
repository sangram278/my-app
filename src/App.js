import React, { useState } from 'react'
import Home from './component/Home'
// import About from './component/About'
import Textform from './component/Textform'
import Alert from './component/Alert'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light')
  const[alert, setAlert]=useState(null)
  const showalert=(messages,type)=>{
    setAlert({
      msg:messages,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
      showalert(' Enable Darkmode', "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert(' Enable Lightmode', 'success')
    }
  }
  return (
<>
{/* <BrowserRouter> */}
<Home title="Texutile" Abouttext="AboutUs" mode={mode} togglemode={toggleMode}/>
<Alert alert={alert}/>
      {/* <Routes> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/" element={}/> */}
        <div className="container">
        <Textform showAlert={showalert} heading="Enter text to analyse" mode={mode} />
        </div>
      {/* </Routes> */}
    {/* </BrowserRouter>  */}
</>
  )
}
export default App
