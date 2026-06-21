import { defineTranslations } from 'fumadocs-core/i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import { appName, gitConfig } from './shared';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    en: { displayName: 'English' },
    es: { displayName: 'Español' },
  });

export function baseOptions(_locale?: string): BaseLayoutProps {
  return {
    nav: { title: appName },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    i18n: true,
  };
}
