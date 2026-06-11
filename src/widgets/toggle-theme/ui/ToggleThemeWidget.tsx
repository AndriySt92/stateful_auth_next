import { ToggleTheme } from '@/features/theme/toggle-theme';

export function ToggleThemeWidget() {
  return (
    <div className="absolute top-5 right-5">
      <ToggleTheme />
    </div>
  );
}
