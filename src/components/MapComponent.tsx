import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapAutoResize = () => {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize(); // Recalculate map size after render
  }, [map]);

  return null; // No UI component is rendered
};


// Import Leaflet CSS
import "leaflet/dist/leaflet.css";


// Define the shape of the location object
interface Location {
  Title: string;
  Link: string;
  Lat: number;
  Long: number;
}

interface MapProps {
  locations: Location[]; // Array of location objects
}

const MapComponent: React.FC<MapProps> = ({ locations }) => {
  // Create a custom marker icon if desired
  const defaultIcon = new L.Icon({
    iconUrl: "/static/images/new-marker.svg",
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "600px", width: "100%" }}>
      {/* Add a tile layer to the map */}
      <MapAutoResize />
      <TileLayer
        url="https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; Esri, HERE, Garmin, OpenStreetMap contributors'
      />
      {/* Map over locations and add markers */}
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.Lat, location.Long]}
          icon={defaultIcon}
        >
          <Popup>
            <a href={location.Link} target="_blank" rel="noopener noreferrer">
              {location.Title}
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
