const ACCEPTED_COLOR = '#228B22';
const WRONG_ANSWER_COLOR = '#FF0000';
const COMPILATION_ERROR_COLOR = '#FFD700';
const RUNTIME_ERROR_COLOR = '#DC143C';
const PRESENTATION_ERROR_COLOR = '#FFFFE0';

type StatusTypeColor = {
  readonly label: string;
  readonly bgColor: string;
};

const STATUS_TYPE_COLORS: Record<Exclude<SolutionStatus, undefined>, StatusTypeColor> = {
  ACCEPTED: { label: 'Accepted', bgColor: ACCEPTED_COLOR },
  WRONG_ANSWER: { label: 'Wrong Answer', bgColor: WRONG_ANSWER_COLOR },
  COMPILATION_ERROR: { label: 'Compilation Error', bgColor: COMPILATION_ERROR_COLOR },
  RUNTIME_ERROR: { label: 'Runtime Error', bgColor: RUNTIME_ERROR_COLOR },
  PRESENTATION_ERROR: { label: 'Presentation Error', bgColor: PRESENTATION_ERROR_COLOR },
};

export default STATUS_TYPE_COLORS;