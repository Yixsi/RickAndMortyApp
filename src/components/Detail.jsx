import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link } from 'react-router-dom';
import style from '../Styles/Detail.module.css'

export default function Detail(){
    const [character, setCharacter] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

      console.log(character);
    return(
        <div className={style.modalContainer}>
          <div className={style.modalElements}>
              <div className={style.text}>
                <h2 className={style.name}>{character?.name}</h2>
                <ul className={style.info}>
                    <li><b>Status:</b> {character?.status}</li>
                    <li><b>Specie:</b> {character?.species}</li>
                    <li><b>Gender:</b> {character?.gender}</li>
                    <li><b>Origin:</b> {character?.origin?.name}</li>
                </ul>
              </div>
              <img src={character?.image} alt='' className={style.imgDetail}/>
            </div>
        </div>
    )
}