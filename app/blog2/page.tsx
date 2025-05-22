import { getPublishedPosts } from '@/lib/notion';
import BlogClient from './_components/BlogClient';

export default async function Blog() {
  const posts = await getPublishedPosts();
  console.log('Fetched posts:', posts);

  return (
    <div className="flex min-h-screen">
      <BlogClient initialPosts={posts} />
    </div>
  );
}
