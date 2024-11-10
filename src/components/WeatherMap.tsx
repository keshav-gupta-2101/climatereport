import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const cities = [
  { name: 'Mumbai', position: [19.0760, 72.8777], temp: 32, condition: 'Partly Cloudy' },
  { name: 'Delhi', position: [28.6139, 77.2090], temp: 28, condition: 'Clear' },
  { name: 'Bangalore', position: [12.9716, 77.5946], temp: 24, condition: 'Rain' },
  { name: 'Chennai', position: [13.0827, 80.2707], temp: 30, condition: 'Sunny' },
  { name: 'Kolkata', position: [22.5726, 88.3639], temp: 29, condition: 'Cloudy' }
];

const WeatherMap = () => {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city) => (
          <Marker
            key={city.name}
            position={city.position as [number, number]}
            icon={defaultIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{city.name}</h3>
                <p className="text-xl">{city.temp}°C</p>
                <p className="text-gray-600">{city.condition}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;