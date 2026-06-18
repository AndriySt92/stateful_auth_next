'use client';

import { type PropsWithChildren } from 'react';

import { RecaptchaProvider, TanstackQueryProvider, ThemeProvider } from './';

export function Providers({ children }: PropsWithChildren<unknown>) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        storageKey="theme"
      >
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </ThemeProvider>
    </TanstackQueryProvider>
  );
}
