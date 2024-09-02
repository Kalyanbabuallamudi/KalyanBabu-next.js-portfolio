// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'; // Import your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
