import { getPublishedPosts } from '@/lib/notion';
import BlogDetail from '../_components/BlogDetail';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: Props) {
  const posts = await getPublishedPosts();
  const post = posts.find((post) => post.slug === params.slug);

  console.log(post);

  if (!post) {
    return notFound();
  }

  return <BlogDetail post={post} />;
}
