'use client';

/*
-최상위 컴포넌트로, 전체 블로그 페이지의 레이아웃을 담당
-상태 관리 (selectedPost, posts)를 담당
-자식 컴포넌트들에게 필요한 props를 전달
 */

import { useState } from 'react';
import BlogList from '@/app/_components/blog/BlogList';
import BlogDetail from '@/app/_components/blog/BlogDetail';
import { BlogPost } from '@/types/blog';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Next.js 시작하기',
      content: 'Next.js는 React 기반의 프레임워크입니다...',
      createdAt: '2024-03-20',
      author: 'Admin',
    },
    {
      id: 2,
      title: 'React Hooks 이해하기',
      content: 'React Hooks는 함수형 컴포넌트에서 상태 관리를...',
      createdAt: '2024-03-19',
      author: 'Admin',
    },
    {
      id: 3,
      title: 'TypeScript 기초',
      content: 'TypeScript는 JavaScript에 타입을 추가한...',
      createdAt: '2024-03-18',
      author: 'Admin',
    },
  ];

  const handleSelectPost = (postId: number | null) => {
    console.log('postId', postId);
    if (postId === null) {
      setSelectedPost(null);
    } else {
      setSelectedPost(posts.find((post) => post.id === postId) ?? null);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* 블로그 리스트 */}
      <div className="w-1/3 border-r p-4">
        <h1 className="mb-4 text-2xl font-bold">Blog Posts</h1>
        <BlogList
          posts={posts}
          onSelectPost={handleSelectPost}
          selectedPostId={selectedPost?.id ?? null}
        />
      </div>

      {/* 블로그 상세 내용 */}
      <div className="flex-1 p-4">
        {selectedPost ? (
          <BlogDetail post={selectedPost} />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            왼쪽에서 블로그 포스트를 선택해주세요.
          </div>
        )}
      </div>
    </div>
  );
}
