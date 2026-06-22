'use client';

import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';

export function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale?: string;
}) {
  return (
    <RootProvider i18n={i18nProvider(translations, locale)}>
      {children}
    </RootProvider>
  );
}