import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

export const Mapa = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rotas, setRotas] = useState([]);

  useEffect(() => {
    const mapa = L.map("mapa").setView([-9.6498, -35.7089], 12);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapa);
  
    if (clientes.length > 0) {
      clientes.forEach((cliente) => {
        // Adiciona os marcadores dos clientes no mapa
        L.marker([cliente.coordenada_x, cliente.coordenada_y])
          .addTo(mapa)
          .bindPopup(`<b>${cliente.nome}</b><br/>Coordenadas: ${cliente.coordenada_x}, ${cliente.coordenada_y}`);
      });
    }
  
    if (rotas.length > 0) {
      // Adiciona as rotas no mapa
      rotas.forEach((rota) => {
        L.polyline(rota, { color: 'red' }).addTo(mapa);
      });
    }
  
    setLoading(false);
  
    return () => {
      mapa.remove();
    };
  }, [clientes, rotas]);
  
  const buscarClientes = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:1700/cliente");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  const calcularRotaOtima = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:1700/calcularRotaOtima");
      setRotas(response.data.rota_otima);
      console.log(response.data.rota_otima)
    } catch (error) {
      console.error("Erro ao calcular rota ótima:", error);
    }
  };

  return (
    <>
      <h1>Localização de todos os clientes cadastrados</h1>
      <div id="mapa" style={{ margin: "auto", height: "300px", width: "700px" }} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <button onClick={buscarClientes}>Mostrar clientes</button>
          <button onClick={calcularRotaOtima}>Calcular rota</button>
        </>
      )}
    </>
  );
};
