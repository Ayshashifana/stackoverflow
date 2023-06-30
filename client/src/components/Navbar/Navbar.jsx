import React,{useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import glass from "../../assets/glas.svg";
import Avatar from "../../components/Avatar/Avatar"
import decode from "jwt-decode"

import "./Navbar.css";
import { setCurrentUser } from '../../actions/currentUser';

function Navbar() {
  const dispatch=useDispatch()
var User=useSelector((state)=>(state.currentUserReducer))
const navigate = useNavigate();

const handleLogOut=()=>{
  dispatch({type:"LOGOUT"})
  navigate("/")
  dispatch(setCurrentUser(null))
}

useEffect(()=>{
  const token = User?.token
  if(token){
    const decodedToken = decode(token);
    if(decodedToken.exp*1000<new Date().getTime()){
      handleLogOut()
    }
  }
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))},[dispatch])



  return (
    <nav className='main-nav'>
      <div className="navbar">
        <Link to='/' className= "nav-item nav-logo"><img src={logo} alt="logo" />
        </Link>
        
        <Link to='/' className= "nav-item nav-btn">About</Link>
        <Link to='/' className= "nav-item nav-btn">Products</Link>
        <Link to='/' className= "nav-item nav-btn">For Teams</Link>

        <form>
          <input type="text" placeholder='Search' />
          <img src={glass} width="18" alt="" className='search-icon'/>
        </form>

        { User === null ? 

        <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:

        <>  <Avatar backgroundColor="#009dff" px='10px' py='7px' color='white' fontSize='16px' borderRadius='50%' ><Link style={{textDecoration:'none',color:'white'}} to={`/Users/${User?.result?._id}`}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>    
        <button className='nav-item nav-links' onClick={handleLogOut}>Log out</button>
        </> }

      </div>
    </nav>
  )
}

export default Navbar