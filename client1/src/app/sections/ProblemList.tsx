// src/sections/ProblemList.tsx
import React from 'react';

type Problem = {
  id: number;
  name: string;
  difficulty: string;
};

type ProblemListProps = {
  problems: Problem[];
};

const ProblemList: React.FC<ProblemListProps> = ({ problems }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 table-fixed">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="w-16 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Difficulty
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {problems.map((problem) => (
          <tr key={problem.id}>
            <td className="whitespace-nowrap px-4 py-2">{problem.id}</td>
            <td className="whitespace-wrap truncate px-4 py-2">{problem.name}</td>
            <td className="whitespace-wrap truncate px-4 py-2">{problem.difficulty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProblemList;