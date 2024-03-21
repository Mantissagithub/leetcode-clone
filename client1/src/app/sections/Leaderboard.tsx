// src/sections/Leaderboard.tsx
import React from 'react';

type LeaderboardProps = {};

const LEADERBOARD\_DATA: Array<{ rank: number, username: string, score: number }> = [
  { rank: 1, username: 'johndoe', score: 1000 },
  { rank: 2, username: 'janedoe', score: 800 },
  { rank: 3, username: 'jacksmith', score: 700 },
  { rank: 4, username: 'annasmith', score: 600 },
];

const Leaderboard: React.FC<LeaderboardProps> = () => {
  return (
    <section className="pt-20 pb-20">
      <h1 className="text-2xl font-semibold text-center mb-5">Leaderboard</h1>
      <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="w-16 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Username
            </th>
            <th scope="col" className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {LEADERBOARD_DATA.map((leader, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2">{leader.rank}</td>
              <td className="whitespace-wrap truncate px-4 py-2">
                <div>{leader.username}</div>
              </td>
              <td className="whitespace-wrap truncate px-4 py-2 text-right">{leader.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Leaderboard;