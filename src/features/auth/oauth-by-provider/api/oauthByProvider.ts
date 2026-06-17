import { api } from '@/shared/api';

import type { OAuthProvider } from '../model';

export async function oauthByProvider(provider: OAuthProvider) {
  return api.get<{ url: string }>(`auth/oauth/connect/${provider}`);
}
