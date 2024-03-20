import { TestCase, SolutionStatus } from '../../interfaces';

export interface CompileResultProps {
  status: SolutionStatus;
  timeConsumedMs: number;
  memoryConsumedBytes: number;
  testsPassedCount: number;
  testsTotalCount: number;
  timeComplexity: null | { order: number; units: number };
  executionLog: string[];
  sourceCodeLength: number;
  submissionDate: Date;
  testCases: TestCase[];
}