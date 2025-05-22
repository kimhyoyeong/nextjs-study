import { getPublishedPosts } from '@/lib/notion';
import BlogDetail from '../_components/BlogDetail';
import { notFound } from 'next/navigation';
import type { BlogPost } from '@/types/blog';

// Next.js 13에서는 동적 라우트 파라미터가 Promise로 전달됩니다.
// 이는 서버 컴포넌트에서 라우트 파라미터를 비동기적으로 처리하기 위함입니다.
interface Props {
  params: Promise<{ slug: string }>; // params는 Promise<{ slug: string }> 타입
}

export default async function Page({ params }: Props) {
  // params는 Promise이므로, 사용하기 전에 await로 해결해야 합니다.
  // 이렇게 하면 라우트 파라미터가 준비되기 전에 컴포넌트가 렌더링되는 것을 방지할 수 있습니다.
  const { slug } = await params;
  const posts: BlogPost[] = await getPublishedPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return <BlogDetail post={post} />;
}
