import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-8 text-4xl font-bold">Next.js Study</h1>
      <nav className="flex gap-4">
        <Link href="/blog" className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Blog
        </Link>
        <Link href="/server-vs-client" className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          서버 vs 클라이언트
        </Link>
      </nav>
    </main>
  );
}
