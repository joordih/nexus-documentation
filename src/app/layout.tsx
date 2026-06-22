import './global.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Banner } from 'fumadocs-ui/components/banner';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('FD_LOCALE')?.value;

  return (
    <html suppressHydrationWarning className={inter.className}>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <Banner id="nexus-dev-banner">
          Nexus is in active development — language features and APIs may change.
        </Banner>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}