import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

const NavBar = () => {
    return (
        <div className='mainNav'>
            <div className='block_1'>
               <img src ={logo} className='logo'/>
            </div>
            <div className='block_2'>
                <div className='butt'>Solutions</div>
                <div className='butt'>Projects</div>
                <div className='butt'>Careers</div>
                <div className='butt'>About</div>
                <div className='butt'>Login</div>
                <div className='butt'>Support</div>
                <div className='butt'>Contact</div>
                <div className='butt'>
                <img src ={search} style={{height: '17px', width: '100%' }} />
                </div>

            </div>
        </div>
    )
}

export default NavBar