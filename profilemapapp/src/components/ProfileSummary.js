import React from "react";

const ProfileSummary = ({ profile }) => {
  if (!profile) return <p>Select a profile to view details.</p>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>Location: {profile.location.lat}, {profile.location.lng}</p>
    </div>
  );
};

export default ProfileSummary;
