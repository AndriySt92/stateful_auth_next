import type { ComponentType } from 'react';

export const OAUTH_PROVIDERS = {
  google: 'google',
  facebook: 'facebook',
  github: 'github',
} as const;

export type OAuthProvider = (typeof OAUTH_PROVIDERS)[keyof typeof OAUTH_PROVIDERS];

export interface OAuthProviderInfo {
  value: OAuthProvider;
  label: string;
  icon: ComponentType<{ className?: string }>;
}
