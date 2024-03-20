import { createSlice } from '@reduxjs/toolkit';
import { InitiateCompileArgs } from './onlineCompilerActions';
import { ResetStateAction } from '../components/OnlineCompilerModal/OnlineCompilerModal.types';

const initialState = {
  status: 'idle',
  error: '',
  result: null,
  stdout: null,
  stderr: null,
  exitCode: null,
};

const onlineCompilerSlice = createSlice({
  name: 'onlineCompiler',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initiateCompile.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(initiateCompile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(initiateCompile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stdout = action.payload.stdout;
        state.stderr = action.payload.stderr;
        state.exitCode = action.payload.exitCode;
        state.result = action.payload.result;
      })
      .addCase(resetOnlineCompilerState, () => initialState);
  }
});

export default onlineCompilerSlice.reducer;