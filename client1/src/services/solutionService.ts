// src/services/solutionService.ts

const BASE_URL = '/api/solutions';

export const fetchSolutions = async (): Promise<Solution[]> => {
  const response = await fetch(`${BASE_URL}`);
  const json = await response.json();
  return json as Solution[];
};