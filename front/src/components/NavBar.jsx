//import styled from "styled-components"
import style from '../Styles/NavBar.module.css'
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import logo from './Images/Rick-And-Morty-Logo.png'

export default function NavBar(){
    const { pathname } = useLocation();
    return(
        <div className={pathname === '/characters'? style.charNav: style.nav}> 
            <div className={style.navItems}>
                <img src={logo} alt="" className={style.img}/>
                    <ul className={style.navList}>
                        <li>
                            <NavLink to={'/home'} className={pathname === '/home'? 'nav-item active': 'nav-item'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'} className={pathname === '/about'? 'nav-item active': 'nav-item'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/characters'} className={pathname === '/characters'? 'nav-item active': 'nav-item'}>Characters</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'} className={pathname === '/login'? 'nav-item active': 'nav-item'}>Login</NavLink>
                        </li>
                    </ul>
            </div>  
        </div>
    )
}