import type { Metadata } from 'next';

import { SandPackCSS } from '@src/components/SandPackCSS/sandpack-styles';
import { getTheme } from '@src/app/actions';

import IsomorphicRootLayout from '@src/appIsomorphic/layout';

import './globals.scss';
import './theme.scss';

export const metadata: Metadata = {
  title: 'CDKit - Docs',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getTheme();

  return (
    <html lang='ko'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          href='https://fonts.googleapis.com/css2?family=Exo:wght@500&display=swap'
          rel='stylesheet'
        />
        <SandPackCSS />
      </head>
      <body data-theme={theme}>
        <IsomorphicRootLayout theme={theme}>{children}</IsomorphicRootLayout>
      </body>
    </html>
  );
}
