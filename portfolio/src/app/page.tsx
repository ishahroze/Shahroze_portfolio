import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Homes from "./components/Homes";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
export default function Home() {
  return (
   <div className=" min-h-screen  bg-black">
    
<Navbar/>
<Homes/>
<About/>
<Skills/>
<Work/>
   </div>
  );
}
