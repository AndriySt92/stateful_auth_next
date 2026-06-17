'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { oauthByProvider } from '../api';

import { OAUTH_BY_PROVIDER_MUTATION_KEY } from './keys';

export function useOAuthByProvider() {
  const router = useRouter();

  return useMutation({
    mutationKey: OAUTH_BY_PROVIDER_MUTATION_KEY,
    mutationFn: oauthByProvider,
    onSuccess: (response) => {
      if (response) {
        router.push(response.url);
      }
    },
  });
}
