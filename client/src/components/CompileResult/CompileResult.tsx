import React from 'react';
import cx from 'clsx';
import StatusIcon from '../StatusIcon';
import ResultTableRow from './ResultTableRow';
import { TestCase, SolutionStatus } from '../../interfaces';
import { compileResultClasses, TimeComplexityUnits } from './CompileResult.style';
import { formatTimeComplexity } from '../../utils/timeComplexityFormatter';
import { statusTypeColors } from '../../utils/statusTypeColors';

type CompileResultProps = {
  status: SolutionStatus;
  timeConsumedMs: number;
  memoryConsumedBytes: number;
  testsPassedCount: number;
  testsTotalCount: number;
  timeComplexity: null | { order: number; units: TimeComplexityUnits };
  executionLog: string[];
  sourceCodeLength: number;
  submissionDate: Date;
  testCases: TestCase[];
};

const CompileResult: React.FC<CompileResultProps> = ({
  status,
  timeConsumedMs,
  memoryConsumedBytes,
  testsPassedCount,
  testsTotalCount,
  timeComplexity,
  executionLog,
  sourceCodeLength,
  submissionDate,
  testCases,
}: CompileResultProps) => {
  const formattedSubmissionDate = submissionDate.toLocaleString();
  const hasTestcases = Boolean(testCases.length);

  return (
    <article className={compileResultClasses['root']}>
      <header className={cx(compileResultClasses['header'], compileResultClasses[status])}>
        <StatusIcon status={status} size={28} />
        <div className={compileResultClasses['details']}>
          <div className={compileResultClasses['submissionInfo']}>
            <strong>{formattedSubmissionDate}</strong>&nbsp;&ndash;{' '}
            <span title={sourceCodeLength.toString() + ' characters'} className={compileResultClasses['characters']}>
              {sourceCodeLength} chars
            </span>
          </div>
          <div className={compileResultClasses['result']}>{statusTypeColors[status].label}</div>
        </div>
      </header>
      <section className={compileResultClasses['stats']}>
        <div className={compileResultClasses['stat']}>
          <span className={compileResultClasses['key']}>Runtime:</span>
          <span className={compileResultClasses['value']}>{timeConsumedMs} ms</span>
        </div>
        <div className={compileResultClasses['stat']}>
          <span className={compileResultClasses['key']}>Memory:</span>
          <span className={compileResultClasses['value']}>{memoryConsumedBytes} bytes</span>
        </div>
        {hasTestcases && (
          <div className={compileResultClasses['stat']}>
            <span className={compileResultClasses['key']}>Tests passed:</span>
            <span className={compileResultClasses['value']}>{testsPassedCount}/{testsTotalCount}</span>
          </div>
        )}
        {timeComplexity && (
          <div className={cx(compileResultClasses['stat'], compileResultClasses['complexity'])}>
            <span className={compileResultClasses['key']}>Space complexity:</span>
            <span className={compileResultClasses['value']}>O({formatTimeComplexity(timeComplexity.order, timeComplexity.units)})</span>
          </div>
        )}
      </section>
      <section className={compileResultClasses['executionLog']}>
        <pre className={compileResultClasses['logTitle']}>Execution log:</pre>
        <ol>
          {executionLog.map((entry, idx) => (
            <li key={idx}>{entry}</li>
          ))}
        </ol>
      </section>
      {hasTestcases && (
        <section className={compileResultClasses['tableWrapper']}>
          <table className={compileResultClasses['resultsTable']}>
            <thead>
              <tr>
                <th></th>
                <th>Output</th>
                <th>Expected Output</th>
                <th>Error Message</th>
              </tr>
            </thead>
            <tbody>
              {testCases.map((tc, i) => (
                <ResultTableRow
                  key={i}
                  index={i + 1}
                  output={tc.output ? tc.output : '-'}
                  expectedOutput={tc.expectedOutput ? tc.expectedOutput : '-'}
                  errorMsg={tc.message}
                />
              ))}
            </tbody>
          </table>
        </section>
      )}
    </article>
  );
};

export default CompileResult;