import React,{useState} from 'react';
import './Navbar.css'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'


// Icons Material UI
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ()=>{
    const [click, setClick] = useState(false)
    const Mouseon = (e) =>{
        e.style.fontSize = "35px"
    }
    const Mouseout = (e)=>{
        e.style.fontSize = "30px"
    }
    const handleClick = ()=>{
        setClick(state => !state)
    }
    return (
        <nav className = "navbar">
            <Link to="/" className = "logo-nav">
                <img src={logo} alt="logo"/>
            </Link>
            <div className = "menu-icon" onClick = {handleClick}>
                {click ? <CloseIcon style={{color: "#fff", fontSize: "40px"}}/> : <MenuIcon style={{color: "#fff", fontSize: "40px"}}/>}
            </div>
            <ul className = {click? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <p>Home</p>
                </li>
                <li className="nav-item">
                    <p>Services</p>
                </li>
                <li className="nav-item">
                    <p>About</p>
                </li>
                <li className="nav-item">
                    <p>Contact</p>
                </li>

            </ul>
            <ul className = "social-media">
                <li>
                    <a className="instagram" href = "https://www.instagram.com/_mateusaraujoo_/" target="_blank" rel="noreferrer" onMouseOver={(e)=>{Mouseon(e.target)}} onMouseOut = {(e)=>{Mouseout(e.target)}}>
                       <InstagramIcon style={{color: "rgb(220,220,220)", fontSize: "30px"}} />
                    </a>
                </li>
                <li>
                    <a className = "github" href = "https://github.com/Mateus-Arauj" target="_blank" rel="noreferrer" onMouseOver={(e)=>{Mouseon(e.target)}} onMouseOut = {(e)=>{Mouseout(e.target)}}>
                        <GitHubIcon style={{color: "rgb(220,220,220)", fontSize: "30px"}} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar