import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Contact from "./Components/Contact";
import About from "./Components/About";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import RecentWork from "./Components/RecentWork";
import HowItWorks from "./Components/HowItWorks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WebDev from "./Components/Services/WebDev";
import Seo from "./Components/Services/Seo";
import Design from "./Components/Services/Design";
import Digitalmm from "./Components/Services/Digitalmm";
import Socialmm from "./Components/Services/Socialmm";
import Whiteboard from "./Components/Services/Whiteboard";
// import Login from "./Admin/Login";
// import Signup from "./Admin/Signup";
// import Dashboard from "./Admin/Dashboard";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />

          <Route path="Services" element={<Services />}></Route>
          <Route path="webdev" element={<WebDev />} />
          <Route path="seo" element={<Seo />} />
          <Route path="design" element={<Design />} />
          <Route path="digitalmm" element={<Digitalmm />} />
          <Route path="socialmm" element={<Socialmm />} />
          <Route path="whiteboard" element={<Whiteboard />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="RecentWork" element={<RecentWork />} />
          <Route path="HowItWorks" element={<HowItWorks />} />
          {/* <Route path="Login" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="Dashboard" element={<Dashboard/>}/> */}
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
