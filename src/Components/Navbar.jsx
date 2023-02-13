import React from 'react'
import logo from '../assets/images/logo.svg'

const Navbar = (props) => {
    let {tab,settab} = props;
    console.log(tab)
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="login-button">
                <div className='loginbtn' onClick={()=>settab((tab)=>!tab)}><a href="#">LOGIN</a></div>
            </div>
        </div>
    )
}

export default Navbar
