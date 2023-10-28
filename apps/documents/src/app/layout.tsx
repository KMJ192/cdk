import type { Metadata } from 'next';

import ContentsLayout from '@src/components/ContentsLayout/ContentsLayout';

import { getTheme } from '@src/app/actions';

import './globals.css';

export const metadata: Metadata = {
  title: 'Blog',
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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Exo:wght@500&display=swap'
          rel='stylesheet'
        />
      </head>
      <body data-theme={theme}>
        <ContentsLayout theme={theme}>{children}</ContentsLayout>
      </body>
    </html>
  );
}
