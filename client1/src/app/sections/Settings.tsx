// src/sections/Settings.tsx
import React from 'react';

type SettingsProps = {};

const Settings: React.FC<SettingsProps> = () => {
  return (
    <section className="pt-20 pb-20">
      <h1 className="text-2xl font-semibold text-center mb-5">Account Settings</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="shadow rounded-lg p-5">
          <h2 className="text-xl font-medium mb-3">General</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Name: John Doe</li>
            <li>Email: john.doe@example.com</li>
            <li>Location: New York City</li>
            <li>Timezone: Eastern Standard Time</li>
          </ul>
        </div>
        <div className="shadow rounded-lg p-5">
          <h2 className="text-xl font-medium mb-3">Security</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Two-Factor Authentication: Enabled</li>
            <li>Last Password Update: March 1st, 2023</li>
          </ul>
        </div>
        <div className="shadow rounded-lg p-5">
          <h2 className="text-xl font-medium mb-3">Notification Preferences</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Weekly Newsletter: Yes</li>
            <li>New Feature Updates: No</li>
            <li>Challenge Solved Notifications: Yes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Settings;