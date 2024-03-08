import { Link } from "react-router-dom"
import HomeImg from '../img/home.png'

export const Home =()=>{
    return(
        <>
            <h1>Tenho todo o controle dos seus clientes.</h1>
<img src={HomeImg }/>
            <Link to="/Cadastrar">Cadastrar</Link>
            <Link to="/Visualizar">Veja todos os clientes cadastrados</Link>
        </>
    )
}