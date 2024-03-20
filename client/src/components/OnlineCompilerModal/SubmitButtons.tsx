import React from 'react';
import Button from '../Button';
import { SolutionStatus } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { clearResults } from '../../redux/onlineCompilerSlice';

const SUBMIT_BUTTON_CLASSES = 'mt-4 mb-2 block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
const RESET_BUTTON_CLASSES = 'mt-4 block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';

const SubmitButtons: React.FC = () => {
  const dispatch = useDispatch();
  const { solutionStatus } = useSelector((state: RootState) => state.onlineCompiler);

  const handleResetClick = () => {
    dispatch(clearResults());
  };

  if (solutionStatus === 'PENDING') {
    return <Button processing={true} className={SUBMIT_BUTTON_CLASSES}>Submitting...</Button>;
  }

  return (
    <>
      <Button className={SUBMIT_BUTTON_CLASSES}>Submit</Button>
      <Button danger={true} onClick={handleResetClick} className={RESET_BUTTON_CLASSES}>Reset</Button>
    </>
  );
};

export default SubmitButtons;