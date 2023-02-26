import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import { Contact } from "./components/ContactSection/Contact";
import MobileNavBar from "./components/MobileNav/MobileNavBar";
import PhotoSlider from "./components/PhotoSection/PhotoSlider";
import TopBanner from "./components/TopBanner/TopBanner";
import Media from "react-media";


function App() {
  return (
    
    <div className="App">
      <Media query="(min-width: 638px)">
        {(matches) => {
          return matches ? <TopBanner /> : <MobileNavBar></MobileNavBar>;
        }}
      </Media>
      
      <AboutMe />
      <PhotoSlider />
      <Contact />
      
      </div>

    
  );
}

export default App;
