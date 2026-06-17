'use client';

import { type OAuthProvider, useOAuthByProvider } from '../model';

import { OAuthButtons } from './OAuthButtons';

export function AuthSocial() {
  const { mutateAsync, isPending } = useOAuthByProvider();

  const onClick = async (provider: OAuthProvider) => {
    await mutateAsync(provider);
  };

  return (
    <div className="flex flex-col items-center gap-4 space-y-4">
      <OAuthButtons onClick={onClick} isLoading={isPending} />

      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-background text-muted-foreground px-2 text-xs uppercase">or</span>
        </div>
      </div>
    </div>
  );
}
