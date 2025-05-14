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
  // selectedPost는 BlogPost 타입이거나 null (초기엔 선택된 게시글 없음)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  //블로그 포스트 목록 더미 데이터
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Next.js 시작하기',
      content:
        'Next.js는 React 기반의 프레임워크입니다. 서버 사이드 렌더링과 정적 사이트 생성을 지원하며, 파일 기반 라우팅, API 라우트 등 다양한 기능을 제공합니다.',
      createdAt: '2024-03-20',
      author: 'Admin',
    },
    {
      id: 2,
      title: 'React Hooks 이해하기',
      content:
        'React Hooks는 함수형 컴포넌트에서 상태 관리와 생명주기 기능을 사용할 수 있게 해주는 기능입니다. useState, useEffect, useContext 등 다양한 Hook을 통해 컴포넌트 로직을 재사용할 수 있습니다.',
      createdAt: '2024-03-19',
      author: 'Admin',
    },
    {
      id: 3,
      title: 'TypeScript 기초',
      content:
        'TypeScript는 JavaScript에 타입을 추가한 프로그래밍 언어입니다. 정적 타입 체크를 통해 개발 시점에 오류를 발견할 수 있고, 코드의 가독성과 유지보수성을 높일 수 있습니다.',
      createdAt: '2024-03-18',
      author: 'Admin',
    },
    {
      id: 4,
      title: 'Tailwind CSS 활용하기',
      content:
        'Tailwind CSS는 유틸리티 우선 CSS 프레임워크입니다. 미리 정의된 클래스를 조합하여 빠르게 스타일링할 수 있으며, 반응형 디자인과 다크 모드도 쉽게 구현할 수 있습니다.',
      createdAt: '2024-03-17',
      author: 'Admin',
    },
    {
      id: 5,
      title: 'Git 기초 명령어',
      content:
        'Git은 분산형 버전 관리 시스템입니다. commit, push, pull, branch 등 기본적인 명령어들을 통해 프로젝트의 버전을 관리하고 협업할 수 있습니다.',
      createdAt: '2024-03-16',
      author: 'Admin',
    },
    {
      id: 6,
      title: '웹 성능 최적화',
      content:
        '웹 성능 최적화는 사용자 경험을 향상시키는 중요한 요소입니다. 이미지 최적화, 코드 스플리팅, 캐싱 전략 등을 통해 웹사이트의 로딩 속도와 반응성을 개선할 수 있습니다.',
      createdAt: '2024-03-15',
      author: 'Admin',
    },
  ];

  const handleSelectPost = (postId: number | null) => {
    // null이면 초기화, 아니면 해당 게시글 선택
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
          selectedPostId={selectedPost ? selectedPost.id : null}
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
