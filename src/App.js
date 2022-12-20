import Home from "./Pages/Home";
import About from "./Pages/About"
import Causes from "./Pages/Causes"
import Volunteer from "./Pages/Volunteer"

import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/causes" element={<Causes/>}/>
        <Route path="/volunteer" element={<Volunteer/>}/>
    </Routes>
  </BrowserRouter>
    
 </>
  );
}

export default App;
