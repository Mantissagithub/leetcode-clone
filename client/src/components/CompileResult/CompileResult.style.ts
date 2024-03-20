import { css } from '@emotion/core';

const baseStyles = css`
  article {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: var(--radii-default);
  }

  header {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }

  .details {
    display: grid;
    gap: 0.25rem;
    grid-auto-flow: column;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    opacity: 0.9;
  }

  strong {
    font-weight: bold;
  }

  span {
    &.characters {
      font-weight: normal;
      color: rgba(var(--colors-foreground), 0.8);
    }
  }

  section {
    border-top: solid thin var(--colors-border);
    padding: 0.5rem 0;
  }

  ol {
    list-style: none;
    counter-reset: item;
    li::before {
      content: counters(item, '.') ' ';
      counter-increment: item;
      float: left;
      color: var(--colors-muted);
      font-family: monospace;
      font-size: small;
      line-height: 1;
      padding-right: 0.5ch;
      text-align: right;
      white-space: pre;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 0.25rem 0.5rem;
    border: solid thin var(--colors-border);
  }

  th {
    text-align: left;
    vertical-align: bottom;
    border-bottom-width: thick;
    background-color: var(--colors-surface);
  }

  tr:last-child td {
    border-bottom-width: thick;
  }

  tbody tr:nth-child(even) {
    background-color: var(--colors-alternate);
  }
`;

const successStyles = css`
  --colors-success: hsla(118deg 79% 50% / 1);
`;

const failureStyles = css`
  --colors-failure: hsla(0deg 79% 50% / 1);
`;

const warningStyles = css`
  --colors-warning: hsla(38deg 79% 50% / 1);
`;

export const compileResultClasses = {
  root: 'compiled-result',
  header: 'compiled-result__header',
  details: 'compiled-result__details',
  submissionInfo: 'compiled-result__submission-info',
  result: 'compiled-result__result',
  stats: 'compiled-result__stats',
  stat: 'compiled-result__stat',
  complexity: 'compiled-result__complexity',
  key: 'compiled-result__key',
  value: 'compiled-result__value',
  charaters: 'compiled-result__character-count',
  tableWrapper: 'compiled-result__table-wrapper',
  resultsTable: 'compiled-result__results-table',
  executionLog: 'compiled-result__execution-log',
  logTitle: 'compiled-result__execution-log-title',
};

export const getCompileResultClassnames = (status: SolutionStatus) => {
  switch (status) {
    case 'ACCEPTED':
      return [...compileResultClasses, successStyles];
    case 'WRONG_ANSWER':
    case 'COMPILATION_ERROR':
    case 'RUNTIME_ERROR':
      return [...compileResultClasses, failureStyles];
    case 'PRESENTATION_ERROR':
      return [...compileResultClasses, warningStyles];
    default:
      return [];
  }
};

export const TimeComplexityUnits = ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)', 'O(2^N)', 'O(N!)'];