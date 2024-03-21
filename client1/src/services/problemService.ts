// src/services/problemService.ts

const BASE_URL = '/api/problems';

export const fetchProblems = async (): Promise<Problem[]> => {
  const response = await fetch(`${BASE_URL}`);
  const json = await response.json();
  return json as Problem[];
};