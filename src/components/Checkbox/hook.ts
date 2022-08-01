import { useContext } from 'react';
import CheckboxContext from './context';

const useCheckbox = () => {
  const context = useContext(CheckboxContext);

  if (!context) {
    throw new Error('useCheckbox must be used within Checkbox');
  }

  return context;
};

export default useCheckbox;
