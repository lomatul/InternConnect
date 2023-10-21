import React,{useState, useEffect} from 'react'
import {useAuthContext} from "../context/useAuthcontext"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const { userstudent } = useAuthContext()
    const {useradmin} = useAuthContext()

    useEffect (() => {
        const innernav = document.querySelector('.inner-nav')
        if(showNav === true){
            innernav.style.left = '0px'
        }
        else{
            innernav.style.left = '-300px'
        }
    }, [showNav])

    const handleClick = () => {
        setShowNav(!showNav)
    }
  return (
    <div className={`navbar ${showNav ? 'sticky' : ''}`}>
        <div onClick={handleClick} className={`${showNav ? "hamburger1":"hamburger"}`}></div>
        <div className='logo'>
        <img
            src="logo.png"
            alt="InternConnect Logo"
            style={{ width: '150px', height: '150px' }}
        />
            <nav className='menu'>
                <ul className='inner-nav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About US</a></li>
                    <li><a href="/Guildeline">Guildeline</a></li>
                    <li><a href="/Adminlogin">Admin</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div className='button' style={{ fontSize: '20px', padding: '30px 40px' , fontWeight: 'bold'}}>
    {userstudent?<p>{userstudent.name}</p>: <a href="/login">Login</a>}
    
</div>

    </div>
  )
}

export default Navbar