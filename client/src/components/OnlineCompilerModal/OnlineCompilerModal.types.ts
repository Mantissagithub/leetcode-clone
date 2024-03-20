import { TestCase, SolutionStatus, Problem, User } from '../../interfaces';

export interface InitializeModalStateActionPayload {
  currentProblem: Problem;
  currentUser: User;
}

export type Action = ReturnType<typeof closeModal>;

export interface CustomModalProps {
  isOpen: boolean;
  toggleIsOpen(): void;
  currentProblem: Problem;
  currentUser: User;
}

export type ModalState = {
  isLoading: boolean;
  isSuccessful: boolean;
  isFailed: boolean;
  currentTestCaseIndex: number;
  totalTestCases: number;
  compilationOutput: string;
  runtimeOutput: string;
  submittedSourceCode: string;
  solutionStatus: SolutionStatus;
  currentProblem: Problem;
  currentUser: User;
};

export type OnSubmitHandler = (submittedSourceCode: string) => Promise<void>;