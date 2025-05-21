export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="w-full bg-gray-300 p-4 text-center text-gray-700">
        <h1 className="text-2xl font-semibold">헤더</h1>
      </header>
      <main className="flex flex-1 items-center justify-center p-4">{children}</main>
      <footer className="w-full bg-gray-300 p-4 text-center text-gray-700">
        <p className="text-xs">푸터</p>
      </footer>
    </div>
  );
}
