import style from '../Styles/Cards.module.css'
import Card from './Card';
import SearchBar from './SearchBar';
import {useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getCharacters } from '../redux/actions/index'
import { Link } from 'react-router-dom'

export default function Cards({onClose, onSearch}) {

   const { characters } = useSelector(state => state);

   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(getCharacters())
   });
   

   return(
         <>
            <div className={style.rowOne}>
               <span className={style.spanInfo}>Write a number and add a character!</span>
               {/* <SearchBar className="search" onSearch={onSearch}/> */}
               <Link to='/favorites'><span>See favorites</span></Link>
            </div>
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
      </>
   );
}