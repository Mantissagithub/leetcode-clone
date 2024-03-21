// src/views/HomeView.tsx
import React from 'react';
import HomeSection1 from '../sections/HomeSection1';
import ProblemList from '../sections/ProblemList';
import SolutionForm from '../sections/SolutionForm';
import { Problem, SolutionFormData } from '../../utils/types';
import { fetchProblems } from '../../services/problemService';

const HomeView: React.FC = () => {
  const [problems, setProblems] = React.useState<Problem[]>([]);

  React.useEffect(() => {
    fetchProblems().then((fetchedProblems: Problem[]) => setProblems(fetchedProblems));
  }, []);

  const handleSolutionSubmit = (data: SolutionFormData): void => {
    // Handle solution submission logic here.
    console.log('Submitted Solution Data:', data);
  };

  return (
    <div className="container mx-auto px-4">
      <HomeSection1 />
      <ProblemList problems={problems} />
      <SolutionForm onSubmit={handleSolutionSubmit} languages={[]} loading={false} />
    </div>
  );
};

export default HomeView;