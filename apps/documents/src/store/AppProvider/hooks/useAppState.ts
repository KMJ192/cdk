import { useContext } from 'react';
import Context from '../Context';

function useAppState() {
  const context = useContext(Context);

  return context;
}

export default useAppState;
