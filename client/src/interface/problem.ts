export interface Problem {
    id: string;
    title: string;
    urlSlug: string;
    description: string;
    statement: string;
    inputDescription: string;
    outputDescription: string;
    constraints: string;
    exampleInputs: string[];
    exampleOutputs: string[];
    hints: string[];
    difficulty: 'EASY' | 'MEDIUM' | 'HARD';
    contestId?: string;
    companyTag?: string;
    tags?: string[];
    languagesAllowed?: ('PYTHON' | 'CPP' | 'JAVA' | 'RUST' | 'GO' | 'RUBY' | 'JAVASCRIPT' | 'TS')[];
    createdAt: Date;
    updatedAt: Date;
  }