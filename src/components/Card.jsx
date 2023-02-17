import { Link } from 'react-router-dom';
import style from '../Styles/Card.module.css'

export default function Card(props) {

   const clear = () =>{
      props.onClose(props.id);
   }
   return (
      
         <div className={style.card}>
            <div className={style.imgData}>
               <button onClick={clear} className={style.button}>X</button>
               <img  src={props.image} alt="" className={style.imgCard}/>
               <Link to={`/detail/${props.id}`}>
                  <h2 className={style.h2}>{props.name}</h2>
               </Link>
            </div>
            
            <span className={style.data}>
               <span>{props.species}</span>
               <span>{props.gender}</span>
            </span>
         </div>
   );
}
