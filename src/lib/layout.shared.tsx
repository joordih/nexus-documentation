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
    nav: {
      title: (
        <>
          <img
            src="/nexus-icon-nobg-black.png"
            alt=""
            className="h-6 w-6 dark:hidden"
          />
          <img
            src="/nexus-icon-nobg-white.png"
            alt=""
            className="hidden h-6 w-6 dark:block"
          />
          {appName}
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    i18n: true,
  };
}
