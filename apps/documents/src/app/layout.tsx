import type { Metadata } from 'next';

import ContentsLayout from '@src/components/ContentsLayout/ContentsLayout';

import { getDevice, getTheme } from '@src/app/actions';

import './globals.css';
import './theme.scss';

export const metadata: Metadata = {
  title: 'Common DevelopKit - Documents',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getTheme();
  const device = await getDevice();

  return (
    <html lang='ko'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Exo:wght@500&display=swap'
          rel='stylesheet'
        />
      </head>
      <body data-theme={theme}>
        <ContentsLayout theme={theme} device={device}>
          {children}
        </ContentsLayout>
      </body>
    </html>
  );
}
