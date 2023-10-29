import { FETCHER, METHOD } from '@src/network/api';
import useAppState from '@src/store/AppProvider/hooks/useAppState';
import type { THEME } from '@src/types/types';

function useToggleTheme() {
  const [{ theme }, setAppState] = useAppState();

  const toggleTheme = async () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    const response = await FETCHER<{
      theme: THEME;
    }>({
      method: METHOD.GET,
      url: `${window.location.origin}/api/theme`,
      params: {
        theme: nextTheme,
      },
    });

    if (!response.isSuccess) {
      // eslint-disable-next-line no-console
      console.error('Cookie Error');
      return;
    }

    document.body.dataset.theme = nextTheme;

    setAppState((appState) => ({
      ...appState,
      theme: response.data?.theme as THEME,
    }));
  };

  return {
    toggleTheme,
  };
}

export default useToggleTheme;
