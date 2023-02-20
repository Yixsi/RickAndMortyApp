import { useState } from "react";
import { Link } from "react-router-dom";
import bg from "./Images/BG-LOGIN-2.webp"
import validation from "./validation";
import style from '../Styles/Form.module.css'
import logoHome from '../components/Images/Rick-And-Morty-Logo.png'

export default function Form({login}){

    const [ user, setUser] = useState({
        username: '',
        password: ''
    })

    const [ errors, setErrors] = useState({
        username: '',
        password: ''
    })


    const handleSubmit = (e) =>{
        e.preventDefault();
        login(user);
    }

    const handleInputChange = (e)=>{
        const {name, value} = e.target;

        setUser({
            ...user,
            [name]: value
        })

        setErrors(validation({
            ...user,
            [name]: value
        }))
    }

    return(
        <div className={style.login}>
            <img src={bg} className={style.loginBG} alt=""/>
            <div className={style.container}>
            <span className={style.loginTitle}>Sign in</span>
            <form onSubmit={handleSubmit} className={style.form} autocomplete="off">
                <label htmlFor="username" className={style.label}>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleInputChange} className={style.input}/>
                {errors.username? <span className={style.formSp}>{errors.username}</span>: <span className={style.alter}></span>}

                <label htmlFor="password" className={style.label}>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleInputChange} className={style.input}/>
                {errors.password? <p className={style.formSp}>{errors.password}</p>: <p className={style.alter}></p>}

                <button type="submit" className={style.buttonLogin}>Get started</button>
            </form>
            </div>

            <Link to={'/home'}>
                <img src={logoHome} alt="home" className={style.homeImg}/>
            </Link>
        </div>
    )
}