import { useContext } from 'react';
import DropdownContext from './context';

const useDropdown = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useDropdown must be used within Alert');
  }

  return context;
};

export default useDropdown;
