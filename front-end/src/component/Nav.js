import React from 'react';
import { Link,useNavigate } from 'react-router-dom';


import '../App.css'

const Nav = () => {
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup');
  }
    return (
      <div className='navbar-container' style={{backgroundColor:'white', position: 'sticky', top: 0 ,zIndex:16}}>
       
        {auth?
        <div  className='Navbar' >
        <ul  className="nav justify-content-center " >
  <li className="nav-item">
    <a className="nav-link active" aria-current="page"> <Link to="/">Home</Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" ><Link to="/workshop">Workshop</Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" ><Link to="/add">Add Product</Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" ><Link to="/expert">Experts</Link></a>
  </li>
  {/* <li className="nav-item">
    <a className="nav-link" ><Link to="/update">Popular Product</Link></a>
  </li> */}
  <li className="nav-item">
    <a className="nav-link" ><Link to="/profile">Creator</Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" ><Link onClick={logout} to="/signup">Logout</Link></a>
  </li> 
</ul>
</div>

:
    <>
    <div  className='Navbar'>
    <ul  className="nav justify-content-center">
       <li className="nav-item">
          <a className="nav-link" ><Link to="/login" >Login</Link></a>
      </li>
        <li className="nav-item">
          <a className="nav-link" ><Link to="/signup" >Sign up</Link></a>
        </li>
   </ul> 
   </div>

   
   </>
   
   
}
      
        </div>
      
    )
};
export default Nav;