import { useState } from "react";
import style from '../Styles/SearchBar.module.css'

export default function SearchBar({onSearch}) {
   let [character, setCharacter] = useState({c: ''});

   const newName = (event) =>{
      setCharacter(character = event.target.value);
   }

   return (
      <div className={style.searchBar}>
         <input type="text" placeholder="Search" onChange={newName} value={character.c} className={style.input}/>
         <button onClick={() => onSearch(character)} value={character.c} className={style.button}><i className="fa-solid fa-magnifying-glass-plus"></i></button> 
      </div>
   );
}
