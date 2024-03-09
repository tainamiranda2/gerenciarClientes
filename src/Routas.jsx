import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ bairros }) => {
  React.useEffect(() => {
    const mapa = L.map("mapa").setView([-9.6498, -35.7089], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapa);

    bairros.forEach((bairro) => {
      L.marker([bairro.coordenada_x, bairro.coordenada_y])
        .addTo(mapa)
        .bindPopup(`<b>${bairro.nome}</b><br/>Coordenadas: ${bairro.coordenada_x}, ${bairro.coordenada_y}`);
    });

    return () => {
      mapa.remove();
    };
  }, [bairros]);

  return <div id="mapa" style={{ height: "500px" }}></div>;
};

const App = () => {
  const bairrosAlagoas = [
    { nome: "Pajuçara", coordenada_x: -9.6585, coordenada_y: -35.7049 },
    { nome: "Pontal da Barra", coordenada_x: -9.6537, coordenada_y: -35.7153 },
    { nome: "Jaraguá", coordenada_x: -9.6676, coordenada_y: -35.7193 },
    { nome: "Jatiúca", coordenada_x: -9.6553, coordenada_y: -35.7278 },
    { nome: "Cruz das Almas", coordenada_x: -9.6261, coordenada_y: -35.7277 },
    { nome: "Farol", coordenada_x: -9.6531, coordenada_y: -35.7174 },
    { nome: "Ponta Verde", coordenada_x: -9.6636, coordenada_y: -35.7174 }
  ];

  return (
    <div>
      <h1>Mapa e Lista de Bairros de Alagoas</h1>
      
      <Mapa bairros={bairrosAlagoas} />
      
      <h2>Lista de Bairros</h2>
      <ul>
        {bairrosAlagoas.map((bairro, index) => (
          <li key={index}>{bairro.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
