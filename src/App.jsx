import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home.jsx';
import About from './Page/About.jsx';
import Contact from './Page/Contact.jsx';
import Navbar from './Components/Navbar.jsx';
import Service from './Service.jsx';
import Footer from "./Components/Footer.jsx";
import TestDrive from "./Page/TestDrive.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar /><br />
     
      {/* <Home/> */}
      {/* <Service/> */}
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testdrive" element={<TestDrive />} />


      </Routes>
      <Service/>
       
       <About/><Contact/>
       <TestDrive/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
