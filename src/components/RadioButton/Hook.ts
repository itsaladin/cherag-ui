import { useContext } from 'react';
import RadioButtonContext from './Context';

const useRadioButton = () => {
  const context = useContext(RadioButtonContext);

  if (!context) {
    throw new Error('useRadioButton must be used within Radio Button');
  }

  return context;
};

export default useRadioButton;
