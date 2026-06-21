import { i18n } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return children;
}