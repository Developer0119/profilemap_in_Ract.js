import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const ProfileMap = ({ profiles }) => {
  const center = profiles.length ? profiles[0].location : { lat: 0, lng: 0 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBgUpU2aUnjewH22giw2tVgoKjkoRyXkAM">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
        {profiles.map((profile) => (
          <Marker key={profile.id} position={profile.location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default ProfileMap;
