import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Footer from "./components/footer"
import Upgradenav from "./components/Upgradenav"

function App() {

  return (
    <>
     <Navbar/>
     {/* //Welcome pages */}
     <Content/> 
     <Footer/> 
    {/* <Upgradenav/> */}
    {/* //page 2 where images are shown  */}
    </>
  )
}

export default App
