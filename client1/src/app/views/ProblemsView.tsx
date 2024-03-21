// src/views/ProblemsView.tsx
import React from 'react';
import ProblemList from '../sections/ProblemList';
import { Problem } from '../../utils/types';
import { fetchProblems } from '../../services/problemService';

const ProblemsView: React.FC = () => {
  const [problems, setProblems] = React.useState<Problem[]>([]);

  React.useEffect(() => {
    fetchProblems().then((fetchedProblems: Problem[]) => setProblems(fetchedProblems));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <ProblemList problems={problems} />
    </div>
  );
};

export default ProblemsView;