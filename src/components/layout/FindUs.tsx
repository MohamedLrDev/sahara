import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, Headset, Mail } from "lucide-react";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix the default icon for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FindUs = () => {
  const position = [31.1499, -4.0172]; // Coordinates for Merzouga, Morocco

  return (
    <div className="my-5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
        Find Us
      </h1>
      <div className="flex justify-center py-10">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "70%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              You are here! <br /> Merzouga, Morocco.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <ul className="flex flex-col md:flex-row justify-center gap-16">
  <li>
    <div className="flex flex-col items-center justify-center">
      <MapPin />
      <span className="mt-2">Merzouga</span> {/* Add margin-top for spacing */}
    </div>
  </li>
  <li>
    <div className="flex flex-col items-center justify-center">
      <Headset />
      <span className="mt-2">+212 000000000</span>
    </div>
  </li>
  <li>
    <div className="flex flex-col items-center justify-center">
      <Mail />
      <span className="mt-2">saharaquad@gmail.com</span>
    </div>
  </li>
</ul>

    </div>
  );
};

export default FindUs;
