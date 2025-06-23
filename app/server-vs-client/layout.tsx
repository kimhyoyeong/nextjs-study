import React from 'react';

export default function ServerVsClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Next.js 서버 vs 클라이언트 컴포넌트</h1>
        {children}
      </div>
    </div>
  );
}
