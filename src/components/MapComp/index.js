import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SERVER from "../../utils/constants";
import "../../App.css";

const MapView = () => {
  const [enterprise, setEnterprise] = useState([]);

  useEffect(() => {
    async function getEnterprise() {
      const result = await fetch(SERVER + "/enterprises");
      const dataEnterprise = await result.json();
      setEnterprise(dataEnterprise);
    }
    getEnterprise();
  }, []);

  return (
    <div className="container-map">
      <MapContainer center={[-15.011468551359942, -55.64097279065505]} zoom={4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />     
        {enterprise.map((item) => (
          <Marker position={item.coordinates}>
            <Popup>
              <div className="popupMap">
                <p>Razão Social: {item.corporateName}</p>
                <p>Nome Fantasia: {item.commercialName}</p>
                <p>CNPJ: {item.cnpj}</p>
                <p>Cidade: {item.city}</p>
                <p>Estado: {item.uf}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
    </div>
  );
};

export default MapView;
