import { Button } from '@/shared/ui';

import { type OAuthProvider } from '../model';

import { PROVIDERS } from './config';

interface OAuthButtonsProps {
  onClick: (provider: OAuthProvider) => void | Promise<void>;
  isLoading?: boolean;
}

export const OAuthButtons = ({ onClick, isLoading = false }: OAuthButtonsProps) => {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
      {PROVIDERS.map(({ value, label, icon: Icon }) => {
        const disabled = isLoading;

        return (
          <Button
            key={value}
            onClick={() => onClick(value)}
            variant="outline"
            disabled={disabled}
            className="w-full cursor-pointer gap-1"
            aria-label={`Увійти через ${label}`}
          >
            <Icon className="size-4 shrink-0" />
            <span className="truncate">{label}</span>
          </Button>
        );
      })}
    </div>
  );
};
