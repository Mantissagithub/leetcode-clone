export interface Solution {
    id: string;
    userId: string;
    problemId: string;
    language: 'PYTHON' | 'CPP' | 'JAVA' | 'RUST' | 'GO' | 'RUBY' | 'JAVASCRIPT' | 'TS';
    code: string;
    timestamp: Date;
    result: 'SUCCESS' | 'FAILURE' | 'RUNNING' | 'QUEUED';
    timeSpentMilliseconds?: number;
    memoryAllocatedBytes?: number;
    judgesComment?: string;
  }