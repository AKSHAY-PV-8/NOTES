import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import SuperHerosPage from './pages/SuperHerosPage'
import RQsuperHeroes from './pages/RQsuperHeroes'
import Navbar from './components/orgainusms/Navbar'
import MarvelHeroes from './pages/MarvelHeroes'
import MarvelHero from './pages/MarvelHero'
import DynamicQueries from './pages/DynamicQueries'


function App() {
 
  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/superHeroes/:heroId' element={<SuperHerosPage/>}/>
        <Route path='/RQsuperHeroes' element={<RQsuperHeroes/>}/>
        <Route path='/MarvelHeroes' element={<MarvelHeroes/>}/>
        <Route path='/details/:heroId' element = {<MarvelHero/>}/>
        <Route path='/dynamic' element = {<DynamicQueries heroId={[1,2]}/>}/>
      </Routes>
    </Router>
    
    
      
    </>
  )
}

export default App
