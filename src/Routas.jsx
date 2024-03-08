import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cadastrar } from './pages/Cadastrar'
import { Visualizar } from './pages/Vizualizar'

 const Routas=()=>{
return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastrar' element={<Cadastrar/>}/>
        <Route path='/visualizar' element={<Visualizar/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default Routas;