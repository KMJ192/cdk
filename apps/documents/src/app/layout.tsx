import type { Metadata } from 'next';

import { SandPackCSS } from '@src/components/SandPackCSS/sandpack-styles';
import { getTheme } from '@src/app/actions';

import IsomorphicRootLayout from '@src/Isomorphic/layout';

import './globals.scss';
import './theme.scss';

export const metadata: Metadata = {
  title: 'Component DevelopKit - Documents',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getTheme();
  // const device = await getDevice();

  return (
    <html lang='ko'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
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
