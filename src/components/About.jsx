import dev from './Images/Yop2.jpeg'
import style from '../Styles/About.module.css'

export default function About(){
    return(
        <div className={style.about}>
            <div className={style.wrapper}>
                <p className={style.paragraph}>Welcome to my <b style={{color: '#68d248'}}>Rick and Morty App</b>. This site is designed to share background information about the characters. Check out evereywhere and enjoy the experience!
                <br/>
                <br/>
                Rick and Morty app is a <i style={{color: 'wheat'}}>Single Page Application - SPA</i> designed and coded by Front-end developer Yisney Soto Avendaño.

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima commodi officia a repellat quia iure iusto cum temporibus dolorem, deleniti, enim voluptatibus. Non modi laboriosam enim! Quia deserunt laborum soluta!
                </p>
                <div className={style.button}>See portfolio</div>
            </div>
            <img src={dev} alt="web-dev" className={style.imgAbout}/>
        </div>
    )
}