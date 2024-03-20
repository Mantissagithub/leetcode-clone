import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import onlineCompilerReducer from '../components/OnlineCompilerModal/OnlineCompilerModal.reducer';

const rootReducer = combineReducers({
  onlineCompiler: onlineCompilerReducer,
});

const middlewareList = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewareList));

export type RootState = ReturnType<typeof rootReducer>;

export default store;