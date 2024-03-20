import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import onlineCompilerApi from '../../services/onlineCompilerApi';
import { PayloadAction } from '@reduxjs/toolkit';

export const initiateCompile = createAsyncThunk<string, { code: string, language: string }>(
  'onlineCompiler/initiateCompile',
  async (args, { rejectWithValue }) => {
    try {
      const response = await onlineCompilerApi.submitCode(args);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

export const resetOnlineCompilerState = createAction<void>('onlineCompiler/resetState');