'use client';

import { usePathname } from 'next/navigation';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';

function getLocale(pathname: string) {
  const segment = pathname.split('/').filter(Boolean)[0];
  return i18n.languages.includes(segment as (typeof i18n.languages)[number])
    ? segment
    : i18n.defaultLanguage;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const locale = getLocale(usePathname());

  return (
    <RootProvider i18n={i18nProvider(translations, locale)}>
      {children}
    </RootProvider>
  );
}