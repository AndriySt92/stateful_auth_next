'use client';

import { type PropsWithChildren } from 'react';

import { ThemeProvider } from './';

export function Providers({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}
