import { type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@cdkit/react-ui';

import style from './style.module.scss';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const router = useNavigate();

  return (
    <main className={style.layout}>
      <header className={style.header}>
        <Button
          onClick={() => {
            router('/');
          }}
        >
          All
        </Button>

        <Button
          onClick={() => {
            router('/layout');
          }}
        >
          Layout
        </Button>
        <Button
          onClick={() => {
            router('/components');
          }}
        >
          Components
        </Button>
      </header>
      <section className={style.container}>{children}</section>
    </main>
  );
}

export default Layout;
