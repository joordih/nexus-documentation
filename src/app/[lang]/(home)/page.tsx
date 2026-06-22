import Link from 'next/link';
import { ArrowRight, Zap, Shield, Code2, Star } from 'lucide-react';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { gitConfig } from '@/lib/shared';

const FEATURES = [
  {
    icon: Zap,
    title: 'Fast compilation',
    description: 'Self-hosting compiler written in Nexus itself. Compiles to C for maximum native performance.',
  },
  {
    icon: Shield,
    title: 'Null safety',
    description: 'Nullable types and safe-call operators eliminate null reference errors at compile time.',
  },
  {
    icon: Code2,
    title: 'Expressive syntax',
    description: 'Clean, readable syntax with type inference, pattern matching, and first-class modules.',
  },
];

const CODE_EXAMPLE = `fibonacci(n: Int): Int {
    if (n <= 1) { return n }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

main(): Void {
    var result = fibonacci(10)
    io.println("fib(10) = " + result.toString())
}`;

export default async function HomePage() {
  const docsHref = `/docs/`;

  return (
    <main className="flex flex-col items-center px-4 py-24 gap-20">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight">
          The Nexus Language
        </h1>
        <p className="text-xl text-fd-muted-foreground leading-relaxed">
          A statically typed, self-hosting systems language that compiles to C.
          Fast, safe, and readable by design.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            href={docsHref}
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary text-fd-primary-foreground px-5 py-2.5 font-medium hover:opacity-90 transition-opacity"
          >
            Get started <ArrowRight size={16} />
          </Link>
          <a
            href="https://github.com/Joordih/nexus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-5 py-2.5 font-medium hover:bg-fd-accent transition-colors"
          >
            <Star size={16} /> GitHub
          </a>
        </div>
      </section>

      {/* Code example */}
      <section className="w-full max-w-2xl">
        <pre className="rounded-xl border border-fd-border bg-fd-card p-6 overflow-x-auto text-sm leading-relaxed">
          <code>{CODE_EXAMPLE}</code>
        </pre>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-5"
          >
            <Icon size={22} className="text-fd-primary" />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </section>

      <section className="w-full max-w-2xl">
        <GithubInfo
          owner={gitConfig.user}
          repo={gitConfig.repo}
          className="border-t border-fd-border pt-3"
        />
      </section>
    </main>
  );
}
