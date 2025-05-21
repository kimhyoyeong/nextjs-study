import { Metadata } from 'next';

// 블로그 포스트 타입 정의
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

// 더미 블로그 데이터
const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs',
    title: 'Next.js 13의 새로운 기능들',
    description: 'App Router, Server Components, 그리고 더 많은 새로운 기능들을 살펴봅니다.',
    date: '2024-03-15',
  },
  {
    slug: 'typescript',
    title: 'TypeScript 실전 팁 10가지',
    description: 'TypeScript를 더 효과적으로 사용하기 위한 실용적인 팁들을 공유합니다.',
    date: '2024-03-14',
  },
  {
    slug: 'tailwind',
    title: 'Tailwind CSS로 빠르게 디자인하기',
    description: 'Tailwind CSS를 활용한 효율적인 UI 개발 방법을 알아봅니다.',
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
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <article className="prose lg:prose-xl mx-auto p-4">
      <h1>{post.title}</h1>
      <div className="mb-4 text-gray-500">{post.date}</div>
      <div className="text-gray-600">{post.description}</div>
    </article>
  );
}
