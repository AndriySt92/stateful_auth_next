'use client';

import { useGoogleReCaptcha } from '@wojtekmaj/react-recaptcha-v3';

export function useRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const verify = async (action: string) => {
    if (!executeRecaptcha) {
      throw new Error('reCAPTCHA not initialized');
    }

    return executeRecaptcha(action);
  };

  return { verify };
}
