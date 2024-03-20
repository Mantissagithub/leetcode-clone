import React, { useState, useReducer } from 'react';
import Modal from 'react-modal';
import SubmitButtons from './SubmitButtons';
import CodeEditorAndConsole from './CodeEditorAndConsole';
import { Problem, SolutionStatus, User } from '../../interfaces';
import { CustomModalProps, ModalState } from './OnlineCompilerModal.types';
import { initializeModalState, reducer } from './OnlineCompilerModal.reducer';
import { closeModal } from './OnlineCompilerModal.actions';

const OnlineCompilerModal: React.FC<CustomModalProps> = ({
  isOpen,
  toggleIsOpen,
  currentProblem,
  currentUser,
}: CustomModalProps) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initializeModalState(),
    currentProblem,
    currentUser,
  } as ModalState);

  const resetModalState = () => {
    dispatch(closeModal());
    setTimeout(() => dispatch(initializeModalState()), 0);
    toggleIsOpen();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => resetModalState()}
      overlayClassName="fixed top-0 left-0 w-full h-screen z-50 bg-gray-500 bg-opacity-70"
      className="bg-white rounded shadow-lg mx-auto my-8 max-w-xl transform overflow-hidden md:-mx-4 sm:max-w-2xl"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="flex items-center px-6 py-3 border-b">
        <button className="text-black mr-3" onClick={() => resetModalState()}>
          ✕
        </button>
        <span className="font-bold capitalize">{state.currentProblem.title}</span>
      </div>
      <CodeEditorAndConsole state={state} dispatch={dispatch} />
      <SubmitButtons state={state} dispatch={dispatch} />
    </Modal>
  );
};

export default OnlineCompilerModal;