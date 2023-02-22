import style from '../Styles/Cards.module.css'
import Card from './Card';
import SearchBar from './SearchBar';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { getCharacters } from '../redux/actions/index'
import { Link } from 'react-router-dom'

export default function Cards({onClose, onSearch}) {

   const { characters } = useSelector(state => state);
   let [ idUrl, setIdUrl ] = useState(1)
   const dispatch = useDispatch();
   
   const handleUrl = (name)=>{
      if(name === 'prev'){
         if(idUrl > 1){
            setIdUrl(--idUrl);
         }else{
            return
         }
      }else if(name==='next'){
         setIdUrl(++idUrl);
      }
   }

   useEffect(()=>{
      dispatch(getCharacters(idUrl));
   }, [idUrl]);

   return(
         <>
            <div className={style.rowOne}>
               <span className={style.spanInfo}>Write a number and add a character!</span>
               {/* <SearchBar className="search" onSearch={onSearch}/> */}
               <Link to='/favorites'><button className={style.button}>See favorites</button></Link>
               <button onClick={() => handleUrl('next')} className={style.pagesButtons}><i className="fa-solid fa-circle-arrow-right"></i></button>
               <button onClick={() =>handleUrl('prev')} className={style.pagesButtons}><i className="fa-solid fa-circle-arrow-left"></i></button>
               
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