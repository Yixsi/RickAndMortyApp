import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form.jsx'
import Home from './components/Home'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites'


function App () {
  let [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
 
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
  const username = 'ejemplo@gmail.com';
  const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
  !access && navigate('/home');
}, [access]);
  
  const onSearch = (character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  

  if(pathname !== '/login'){
    return(
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route exact path={'/home'} element={<Home/>}></Route>
          <Route path={'/characters'} element={<Cards characters={characters} onSearch={onSearch}/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/detail/:ID'} element={<Detail />}/>
          <Route path={'/favorites'} element={<Favorites/>}/>
        </Routes>
      </div>
    )
  }else{
    return (
      <div className='App'>
        <Routes>
          <Route exact path={'/home'} element={<Home/>}></Route>
          <Route path={'/login'} element={<Form login={login}/>}/>
        </Routes>
      </div>
    )
  }

  
}

export default App
