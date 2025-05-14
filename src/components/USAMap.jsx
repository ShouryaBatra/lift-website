import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";

// Fix default marker icon issue in Leaflet
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function USAMap({ chapters }) {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={[39.8283, -98.5795]} // Center of USA
        zoom={4}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {chapters.map((chapter) => {
          const coords = chapter.location?.coordinates;
          if (!coords) return null;
          return (
            <Marker
              key={chapter.id}
              position={[coords.latitude, coords.longitude]}
            >
              <Popup>
                Chapter in{chapter.location.city} {chapter.location.state}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

USAMap.propTypes = {
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string,
        coordinates: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      }),
    })
  ).isRequired,
};
