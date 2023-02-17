import Card from './Card';
import SearchBar from './SearchBar';
import style from '../Styles/Cards.module.css'

export default function Cards({characters, onClose, onSearch}) {
   return(
         <div className={style.container}>
            <span className={style.spanInfo}>Write a number and add a character!</span>
            <SearchBar className="search" onSearch={onSearch}/>

            <div className={style.cards}>
               {
                  characters.map((el, key) => {
                     return(
                        <Card id={el.id}
                        name = {el.name}
                        species = {el.species}
                        gender = {el.gender}
                        image = {el.image}
                        onClose={onClose}
                        />
                        )
                     })
                  }
            </div>
      </div>
   );
}

// animation-name:ingresar ;
//     animation-duration: 2s;
//     animation-iteration-count: 1;
//     animation-fill-mode: forwards;
// @keyframes ingresar {
//     0%{
//         opacity:0;

//     }
//     100%{
//         opacity:1;
       
//     }
    
// }