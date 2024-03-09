import { useState, useEffect } from "react";
import L from "leaflet";
import axios from "axios";

import "leaflet/dist/leaflet.css";

export const Mapa = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Função para carregar os clientes do backend
    const carregarClientes = async () => {
      try {
        const response = await axios.get("http://localhost:1700/cliente");
        setClientes(response.data);
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);
      }
    };

    carregarClientes();
  }, []);

  useEffect(() => {
    // Cria o mapa Leaflet
    const mapa = L.map("mapa").setView([-23.5505, -46.6333], 10);

    // Adiciona o mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapa);

    // Adiciona marcadores para cada cliente
    clientes.forEach((cliente) => {
      L.marker([cliente.coordenada_x, cliente.coordenada_y])
        .addTo(mapa)
        .bindPopup(`<b>Cliente:</b> ${cliente.nome}<br/><b>Coordenadas:</b> ${cliente.coordenada_x}, ${cliente.coordenada_y}`);
    });

    return () => {
      // Remove o mapa quando o componente for desmontado
      mapa.remove();
    };
  }, [clientes]);

  return <div id="mapa" style={{ height: "400px" }}></div>;
};


