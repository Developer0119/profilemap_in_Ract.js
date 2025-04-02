import React, { useState } from "react";
import ProfileList from "../components/ProfileList";
import ProfileMap from "../components/ProfileMap";
import ProfileSummary from "../components/ProfileSummary";

const profilesData = [
    { id: 1, name: "John Doe", description: "Photographer", location: { lat: 37.7749, lng: -122.4194 } },
    { id: 2, name: "Jane Smith", description: "Travel Blogger", location: { lat: 34.0522, lng: -118.2437 } },
    { id: 3, name: "Michael Brown", description: "Software Engineer", location: { lat: 40.7128, lng: -74.0060 } },
    { id: 4, name: "Emily White", description: "Graphic Designer", location: { lat: 51.5074, lng: -0.1278 } },
    { id: 5, name: "David Green", description: "Musician", location: { lat: 48.8566, lng: 2.3522 } },
    { id: 6, name: "Sophia Martinez", description: "Doctor", location: { lat: 41.8781, lng: -87.6298 } },
    { id: 7, name: "Daniel Lee", description: "Chef", location: { lat: 35.6895, lng: 139.6917 } },
    { id: 8, name: "Olivia Taylor", description: "Entrepreneur", location: { lat: -33.8688, lng: 151.2093 } },
    { id: 9, name: "William Clark", description: "Architect", location: { lat: 45.4642, lng: 9.1900 } },
    { id: 10, name: "Mia Harris", description: "Fashion Designer", location: { lat: 52.5200, lng: 13.4050 } },
    { id: 11, name: "James Wilson", description: "Fitness Trainer", location: { lat: -22.9068, lng: -43.1729 } },
    { id: 12, name: "Charlotte Thomas", description: "Writer", location: { lat: 37.9838, lng: 23.7275 } },
    { id: 13, name: "Benjamin Scott", description: "Filmmaker", location: { lat: 55.7558, lng: 37.6173 } },
    { id: 14, name: "Ella Rodriguez", description: "Digital Marketer", location: { lat: 28.6139, lng: 77.2090 } },
    { id: 15, name: "Lucas Walker", description: "Data Scientist", location: { lat: 25.276987, lng: 55.296249 } },
  ];
  

  

const Home = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div>
      <ProfileList profiles={profilesData} onSelect={setSelectedProfile} />
      <ProfileMap profiles={profilesData} />
      <ProfileSummary profile={selectedProfile} />
    </div>
  );
};

export default Home;
