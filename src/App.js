import Navbar from "./components/Navbar";
import Home from './components/Home';
// import Social from "./components/Social";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Por from "./components/Por";



function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    {/* <Research/> */}
    <Experience/>
    <Por/>
    <Contact/>
   </div>
  );
}

export default App;
