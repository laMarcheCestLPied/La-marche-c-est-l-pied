import 'leaflet/dist/leaflet.css';

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'


const SatelliteMap = ({ positions }) => {
    return (
        <MapContainer
            center={positions[0]}
            zoom={14}
            style={{ height: '500px', width: '50%' }}
        >
            {/* Utiliser des tuiles de vue satellite d'OpenStreetMap */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
            />

            {/* Ajouter un repère en fonction des coordonnées */}
            {positions.map((position, index) => (
                <Marker key={index} position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                    <Popup>
                        <a
                            href={`https://www.google.com/maps/dir//${position[0]},${position[1]}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Obtenir l&apos;itinéraire sur Google Maps
                        </a>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default SatelliteMap;
