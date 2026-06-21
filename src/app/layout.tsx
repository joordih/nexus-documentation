import './global.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={inter.className}>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
