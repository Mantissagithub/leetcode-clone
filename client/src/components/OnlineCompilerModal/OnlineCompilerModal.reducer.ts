import { Action, MODAL_STATE_INITIAL } from './OnlineCompilerModal.types';
import { closeModal } from './OnlineCompilerModal.actions';

export function initializeModalState(): Partial<MODAL_STATE_INITIAL> {
  return {};
}

export function reducer(state: MODAL_STATE_INITIAL, action: Action): MODAL_STATE_INITIAL {
  switch (action.type) {
    case 'CLOSE_MODAL':
      return {
        ...state,
        ...MODAL_STATE_INITIAL,
      };
    default:
      return state;
  }
}