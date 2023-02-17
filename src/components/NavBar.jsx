//import styled from "styled-components"
import style from '../Styles/NavBar.module.css'
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import logo from './Images/Rick-And-Morty-Logo.png'


// const Nav = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     background-color: #19182691;
//     padding: 0;
//     width: 100%;
//     box-shadow: 0.5em 0 0.8em #000;
//     position: relative;
//     z-index: 2;

// `
// const Img = styled.img`
//     left: 10px;
//     height:20%;
//     width: 15%;
//     padding-left: 80px;
//     margin-right: auto;

// `
// const Ul = styled.ul`
//     display: flex;
//     list-style: none;
//     align-items: center;
//     font-size: 1.6rem;
//     font-family: 'Patrick Hand', cursive;
//     margin-right: 40px;
    
// `
// const Li = styled.li`
//     text-decoration: none;
//     padding: 3px 20px;
//     border-bottom: 3.9px solid rgba(230, 133, 48, 0);
//     letter-spacing: 0.2rem;

//     &:hover{
//         border-bottom: 4px solid rgb(230, 133, 48);
//         padding: 3px 20px;
//     }
// `

export default function NavBar(){
    const { pathname } = useLocation();
    return(
        <div className={style.nav}> 
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