// src/sections/Profile.tsx
import React from 'react';

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  return (
    <section className="pt-20 pb-20 text-center">
      <img
        alt="Avatar"
        className="mx-auto rounded-full h-24 w-24 border-2 border-white shadow-xl ring-2 ring-white"
        src="https://placehold.co/192x192?text=Profile+Image"
      />
      <h1 className="text-2xl font-semibold mt-5">John Doe</h1>
      <p className="text-gray-500">john.doe@example.com</p>
      <div className="mt-5">
        <span className="mr-3">Points:</span>
        <span className="font-semibold">1000</span>
      </div>
      <div className="mt-5">
        <span className="mr-3">Rank:</span>
        <span className="font-semibold">Top 1%</span>
      </div>
      <div className="mt-5">
        <span className="mr-3">Badges:</span>
        <span className="badge badge-primary">Expert</span>
        <span className="badge badge-secondary ml-2">Contributor</span>
      </div>
    </section>
  );
};

export default Profile;