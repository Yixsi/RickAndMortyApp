import { Link } from 'react-router-dom';
import style from '../Styles/Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from '../redux/actions';

export default function Card(props) {

   const favorites = useSelector(state => state.favorites);
   const [ isFavorite, setFavorite ] = useState(false);  
   const dispatch = useDispatch();

   useEffect(() => {
      for(let f of favorites){
         if (f.id === props.id) {
            setFavorite(true);
      }};
}, [favorites]);

   const handleFavorite = ()=>{
      if(isFavorite){
         setFavorite(false);
         dispatch(deleteFavorite(props.id));
      }else{
         setFavorite(true);
         dispatch(addFavorite(props));
      }
   }

   return (
      
         <div className={style.card}>
               {
                  isFavorite ? (
                     <button onClick={handleFavorite} className={style.button}><i className="fa-solid fa-star" style={{color: '#ffbf00'}}></i></button>
                  ) : (
                     <button onClick={handleFavorite} className={style.button}><i className="fa-regular fa-star" style={{color: '#ffbf00'}}></i></button>
                  )
               }
               {/* <button className={style.button}>X</button> */}
               <img  src={props.image} alt="" className={style.imgCard}/>
               <Link to={`/detail/${props.id}`} style={{textDecoration: 'none'}}>
                  <span className={style.name}>{props.name}</span>
               </Link>
            <span className={style.data}>
               <span>{props.species}</span>
               <span>{props.gender}</span>
            </span>
         </div>
   );
}
