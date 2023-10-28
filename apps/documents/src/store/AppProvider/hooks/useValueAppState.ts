import useAppState from './useAppState';

function useValueAppState() {
  const [state] = useAppState();

  return state;
}

export default useValueAppState;
