import { useSelector } from "react-redux"
import style from '../Styles/Favorites.module.css'
import Card from "./Card"

export default function Favorites(){

    const { favorites } = useSelector(state => state)
    return(
        <div className={style.favorites}>
               {  (favorites.length > 0)?
                  favorites.map((el, key) => {
                     return(
                        <Card id={el.id}
                        name = {el.name}
                        species = {el.species}
                        gender = {el.gender}
                        image = {el.image}
                        />
                        )
                     })
                     : <p className={style.noFavs}>Oops! no favorites yet. Add your favorites characters!</p>
                  }
            </div>
    )
    
}