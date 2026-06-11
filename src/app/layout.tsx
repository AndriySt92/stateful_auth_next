import type { Metadata } from 'next';

import { Providers } from '@/shared/providers';
import { ToggleThemeWidget } from '@/widgets/toggle-theme';

import '@/shared/styles/globals.css';

export const metadata: Metadata = {
  title: 'Stateful Auth',
  description: 'Stateful Auth Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <ToggleThemeWidget />
            <div className="flex h-screen w-full items-center justify-center px-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
