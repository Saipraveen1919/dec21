import { BrowserRouter,Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cars from './components/Cars'

export default function 
app() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
      
      <Route path="/Home"element ={<Home/>}/>
      <Route path="/carnpm"element ={<Cars/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}