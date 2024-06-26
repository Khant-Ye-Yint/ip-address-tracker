'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { usePositionStore, useResultStore } from '@/app/lib/store';
import ChangeView from './ChangeView';

const LeafletMap = () => {
  const position = usePositionStore((state) => state.position);
  const result = useResultStore((state) => state.result);

  console.log(result);

  const LocationIcon = new Icon({
    iconUrl: '/icons/location.png',
    iconSize: [38, 38],
  });

  return (
    position && (
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={LocationIcon}>
          <Popup>{<h2>{result.location}</h2>}</Popup>
        </Marker>
        <ChangeView center={position} zoom={15} />
      </MapContainer>
    )
  );
};

export default LeafletMap;
