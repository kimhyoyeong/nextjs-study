'use client';

import { useEffect, useState } from 'react';
import type { BlogPost } from '@/types/blog';

export default function ClientComponent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 2;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = currentPage * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-green-50 p-4">
        <h3 className="font-semibold text-green-800">클라이언트 컴포넌트 특징:</h3>
        <ul className="mt-2 space-y-1 text-sm text-green-700">
          <li>• 브라우저에서 JS로 데이터 가져오기</li>
          <li>• useState, useEffect 등 리액트 훅 사용 가능</li>
          <li>• 사용자 인터랙션 처리 가능</li>
          <li>• 동적 UI 업데이트</li>
        </ul>
      </div>

      {/* 페이저 인터랙션 예제 */}
      <div className="rounded-lg bg-yellow-50 p-4">
        <h4 className="mb-2 font-medium">🖱️ 페이저 인터랙션 예제:</h4>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                  currentPage === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}>
                {index + 1}
              </button>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            (페이지 {currentPage + 1} / {totalPages})
          </span>
        </div>
      </div>

      <div>
        <h4 className="mb-2 font-medium">📝 블로그 포스트 목록 (클라이언트에서 렌더링):</h4>
        {loading ? (
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 animate-pulse rounded bg-gray-200"></div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {currentPosts.map((post) => (
              <div key={post.id} className="rounded border bg-white p-3">
                <h5 className="font-medium">{post.title}</h5>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
