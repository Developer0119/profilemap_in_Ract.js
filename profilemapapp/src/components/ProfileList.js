import React from "react";

const ProfileList = ({ profiles, onSelect }) => {
  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} onClick={() => onSelect(profile)}>
            {profile.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
