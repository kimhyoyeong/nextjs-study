import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-8 text-4xl font-bold">Next.js Study</h1>
      <nav className="flex flex-col gap-4">
        <Link
          href="/blog"
          className="inline-block transform rounded-md bg-gray-400 px-5 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-600">
          Blog - 컴포넌트간의 데이터전달
        </Link>
        <Link
          href="/about"
          className="inline-block transform rounded-md bg-gray-400 px-5 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-600">
          slug 공부
        </Link>
        <Link
          href="/blog4"
          className="inline-block transform rounded-md bg-blue-500 px-5 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600">
          Blog4 - Notion API 연동
        </Link>
      </nav>
    </main>
  );
}
