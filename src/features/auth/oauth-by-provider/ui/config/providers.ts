import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';

import type { OAuthProviderInfo } from '../../model/types';
import { OAUTH_PROVIDERS } from '../../model/types';

export const PROVIDERS: OAuthProviderInfo[] = [
  {
    value: OAUTH_PROVIDERS.google,
    label: 'Google',
    icon: FaGoogle,
  },
  {
    value: OAUTH_PROVIDERS.facebook,
    label: 'Facebook',
    icon: FaFacebook,
  },
  {
    value: OAUTH_PROVIDERS.github,
    label: 'GitHub',
    icon: FaGithub,
  },
];
