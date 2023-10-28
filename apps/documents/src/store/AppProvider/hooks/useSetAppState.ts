import useAppState from './useAppState';

function useSetAppState() {
  const setState = useAppState()[1];
  return setState;
}

export default useSetAppState;
