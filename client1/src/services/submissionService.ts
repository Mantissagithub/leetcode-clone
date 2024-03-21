// src/services/submissionService.ts

const BASE_URL = '/api/submissions';

export const fetchSubmissions = async (): Promise<Submission[]> => {
  const response = await fetch(`${BASE_URL}`);
  const json = await response.json();
  return json as Submission[];
};