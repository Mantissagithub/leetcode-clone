import { createSlice } from '@reduxjs/toolkit';
import {
  InitializeModalStateActionPayload,
  Action,
  ModalState,
  OnSubmitHandler,
} from '../components/OnlineCompilerModal/OnlineCompilerModal.types';

const initialState: ModalState = {
  isLoading: false,
  isSuccessful: false,
  isFailed: false,
  currentTestCaseIndex: 0,
  totalTestCases: 0,
  compilationOutput: '',
  runtimeOutput: '',
  submittedSourceCode: '',
  solutionStatus: 'NOT_ATTEMPTED',
  currentProblem: {} as Problem,
  currentUser: {} as User,
};

const onlineCompilerSlice = createSlice({
  name: 'onlineCompiler',
  initialState,
  reducers: {
    initializeModalState: (state, action: { payload: InitializeModalStateActionPayload }) => {
      state.currentProblem = action.payload.currentProblem;
      state.currentUser = action.payload.currentUser;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    markAsSuccessful: (state) => {
      state.isSuccessful = true;
      state.isFailed = false;
    },
    markAsFailed: (state) => {
      state.isSuccessful = false;
      state.isFailed = true;
    },
    incrementCurrentTestCaseIndex: (state) => {
      state.currentTestCaseIndex += 1;
    },
    setTestCasesCount: (state, action: { payload: number }) => {
      state.totalTestCases = action.payload;
    },
    setCompilationOutput: (state, action: { payload: string }) => {
      state.compilationOutput = action.payload;
    },
    setRuntimeOutput: (state, action: { payload: string }) => {
      state.runtimeOutput = action.payload;
    },
    setSubmittedSourceCode: (state, action: { payload: string }) => {
      state.submittedSourceCode = action.payload;
    },
    setSolutionStatus: (state, action: { payload: SolutionStatus }) => {
      state.solutionStatus = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  initializeModalState,
  startLoading,
  stopLoading,
  markAsSuccessful,
  markAsFailed,
  incrementCurrentTestCaseIndex,
  setTestCasesCount,
  setCompilationOutput,
  setRuntimeOutput,
  setSubmittedSourceCode,
  setSolutionStatus,
  reset,
} = onlineCompilerSlice.actions;

export const onlineCompilerReducer = onlineCompilerSlice.reducer;

const dispatch = (action) => {
    console.log('Dispatching action:', action.type);
  
    switch (action.type) {
      case 'startLoading':
        console.log('Starting loading...');
        // Implement logic to handle startLoading action
        break;
      case 'stopLoading':
        console.log('Stopping loading...');
        // Implement logic to handle stopLoading action
        break;
      case 'setSolutionStatus':
        console.log('Setting solution status:', action.payload);
        // Implement logic to handle setSolutionStatus action
        break;
      case 'setCompilationOutput':
        console.log('Setting compilation output:', action.payload);
        // Implement logic to handle setCompilationOutput action
        break;
      case 'setRuntimeOutput':
        console.log('Setting runtime output:', action.payload);
        // Implement logic to handle setRuntimeOutput action
        break;
      case 'setSubmittedSourceCode':
        console.log('Setting submitted source code:', action.payload);
        // Implement logic to handle setSubmittedSourceCode action
        break;
      case 'markAsSuccessful':
        console.log('Marking as successful...');
        // Implement logic to handle markAsSuccessful action
        break;
      case 'markAsFailed':
        console.log('Marking as failed...');
        // Implement logic to handle markAsFailed action
        break;
      default:
        console.log('Unknown action type:', action.type);
    }
  };
  

export const submitCode: OnSubmitHandler = async (submittedSourceCode) => {
  // Perform submit code functionality here and dispatch the necessary actions
  // e.g.:
  // dispatch(startLoading())
  // try {
  //   const response = await fetch('<YOUR_ONLINE_COMPILE_SERVICE>', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ submittedSourceCode }),
  //   });
  //   const { solutionStatus, compilationOutput, runtimeOutput, ...otherDetails } = await response.json();
  //   dispatch(setSolutionStatus(solutionStatus))
  //   dispatch(setCompilationOutput(compilationOutput))
  //   dispatch(setRuntimeOutput(runtimeOutput))
  //   dispatch(setSubmittedSourceCode(submittedSourceCode))
  //   dispatch(stopLoading())
  //   dispatch(markAsSuccessful())
  // } catch (error) {
  //   dispatch(stopLoading())
  //   dispatch(markAsFailed())
  // }
  const submitCode: OnSubmitHandler = async (submittedSourceCode) => {
    dispatch(startLoading());
    try {
      const response = await fetch('<YOUR_ONLINE_COMPILE_SERVICE>', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ submittedSourceCode }),
      });
      const { solutionStatus, compilationOutput, runtimeOutput, ...otherDetails } = await response.json();
      dispatch(setSolutionStatus(solutionStatus));
      dispatch(setCompilationOutput(compilationOutput));
      dispatch(setRuntimeOutput(runtimeOutput));
      dispatch(setSubmittedSourceCode(submittedSourceCode));
      dispatch(stopLoading());
      dispatch(markAsSuccessful());
    } catch (error) {
      dispatch(stopLoading());
      dispatch(markAsFailed());
    }
  };
};