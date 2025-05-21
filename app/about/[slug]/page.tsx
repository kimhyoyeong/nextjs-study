import { Metadata } from 'next';

// 블로그 포스트 타입 정의
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
}

// 더미 블로그 데이터
const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs-13-new-features',
    title: 'Next.js 13의 새로운 기능들',
    description: 'App Router, Server Components, 그리고 더 많은 새로운 기능들을 살펴봅니다.',
    content: `Next.js 13은 React의 최신 기능들을 활용한 혁신적인 업데이트를 제공합니다.

## App Router
App Router는 파일 시스템 기반의 새로운 라우팅 시스템입니다. 이는 더 직관적이고 유연한 라우팅을 가능하게 합니다.

## Server Components
React Server Components는 서버에서 렌더링되는 컴포넌트로, 클라이언트 번들 크기를 줄이고 초기 로딩 성능을 향상시킵니다.

## Streaming
Streaming을 통해 페이지를 점진적으로 렌더링하고 로드할 수 있어 사용자 경험이 크게 향상됩니다.`,
    date: '2024-03-15',
  },
  {
    slug: 'typescript-10-tips',
    title: 'TypeScript 실전 팁 10가지',
    description: 'TypeScript를 더 효과적으로 사용하기 위한 실용적인 팁들을 공유합니다.',
    content: `TypeScript는 JavaScript에 타입 안정성을 더해주는 강력한 도구입니다.

## 1. 타입 추론 활용하기
TypeScript의 타입 추론 기능을 최대한 활용하면 코드를 더 간결하게 작성할 수 있습니다.

## 2. 유틸리티 타입 활용하기
Partial, Pick, Omit 등의 유틸리티 타입을 활용하면 타입 정의를 더 효율적으로 할 수 있습니다.

## 3. 제네릭 활용하기
제네릭을 활용하면 재사용 가능한 타입을 정의할 수 있습니다.`,
    date: '2024-03-14',
  },
  {
    slug: 'tailwind-css-guide',
    title: 'Tailwind CSS로 빠르게 디자인하기',
    description: 'Tailwind CSS를 활용한 효율적인 UI 개발 방법을 알아봅니다.',
    content: `Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 빠른 UI 개발을 가능하게 합니다.

## 장점
- 빠른 개발 속도
- 일관된 디자인 시스템
- 작은 번들 사이즈

## 실전 팁
1. @apply 지시문 활용하기
2. 커스텀 테마 설정하기
3. 반응형 디자인 구현하기`,
    date: '2024-03-13',
  },
];

// 동적 메타데이터 생성
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  return {
    title: post?.title || 'Blog Post',
    description: post?.description || 'Blog post not found',
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: Props) {
  return <div>{params.slug}</div>;
}
