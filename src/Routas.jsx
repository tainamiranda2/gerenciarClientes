import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cadastrar } from './pages/Cadastrar'
import { Visualizar } from './pages/Vizualizar'
import { Filtrar } from './pages/Filtrar'
import { Mapa } from './pages/Mapa'

 const Routas=()=>{
return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastrar' element={<Cadastrar/>}/>
        <Route path='/visualizar' element={<Visualizar/>}/>
        <Route path='/filtrar' element={<Filtrar/>}/>
        <Route path='/mapa' element={<Mapa/>}/>

    </Routes>
    </BrowserRouter>
)
}

export default Routas;