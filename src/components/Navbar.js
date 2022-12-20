import React,{useState} from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show ,setShow] = useState(false);
  return (
    <>
    <section>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container navbar-conatiner">
    
       <a className="navbar-brand">
        <img src="Images/Logo/logo.png" alt="logo" className="img-fluid" />
        <span>Kind Heart Charity <br/>
          <small>
          Non-Profit Organisation
          </small>
          </span>   
      </a>
    <button className="navbar-toggler" 
    type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
       aria-expanded="false" 
       aria-label="Toggle navigation"
       onClick={()=>setShow(!show)}>

      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : " "}`} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/causes">Causes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/volunteer">Volunteer</NavLink>
        </li>
        <li>
        <button className='main-btn mt-2'>Donate</button>
        </li>
      </ul>
    </div>
    
  </div>
</nav>

</section>
    </>
  )
}

export default Navbar
