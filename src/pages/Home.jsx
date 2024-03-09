import { Link } from "react-router-dom"
import HomeImg from '../img/home.png'

export const Home =()=>{
    return(
        <>
            <h1>Tenha todo o controle dos seus clientes.</h1>
<img src={HomeImg }/>
            <Link to="/Cadastrar">Cadastrar</Link>
            <Link to="/Visualizar">Clientes cadastrados</Link>
            <Link to="/Mapa">Maps de clientes</Link>
        </>
    )
}