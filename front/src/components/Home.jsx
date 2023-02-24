import backImg from './Images/bg2-home.jpg'
import { Link } from 'react-router-dom'
import style from '../Styles/Home.module.css'

export default function Home(){
    return(
        <div className={style.home}>
            <img src={backImg} alt="" className={style.backImg}/>
            <div className={style.welcome}>
                <h1 className={style.mainTitle}>Universe of Rick and Morty</h1>
                <p className={style.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate unde autem aspernatur molestiae atque, consectetur, ipsam impedit, mollitia deserunt pariatur totam beatae tenetur sed!
                    <br/><br/>
                    Vitae soluta illo suscipit nesciunt assumenda quaeratt.
                </p>
                <div className={style.button}><Link to={'/characters'} className='homeButton'>See characters</Link></div>
            </div>
        </div>
    )
}