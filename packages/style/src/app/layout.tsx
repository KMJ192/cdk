import Layout from '@src/pageContents/Layout/Layout';
import { type ReactNode } from 'react';

function RootLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
}

export default RootLayout;
