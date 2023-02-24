import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail } from "../redux/actions";
import style from '../Styles/Detail.module.css'

export default function Detail(){
  const character = useSelector(state => state.characterDetail);
  const { ID } = useParams();
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacterDetail(ID))
      });

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