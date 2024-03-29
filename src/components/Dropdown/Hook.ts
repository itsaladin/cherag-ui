import { useContext } from 'react';
import DropdownContext from './Context';

const useDropdown = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useDropdown must be used within dropdown');
  }

  return context;
};

export default useDropdown;
