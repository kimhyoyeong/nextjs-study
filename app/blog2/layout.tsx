import { getPublishedPosts } from '@/lib/notion';
import BlogList from './_components/BlogList';

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const posts = await getPublishedPosts();

  return (
    <div className="flex min-h-screen">
      <div className="w-1/3 border-r p-4">
        <h1 className="mb-4 text-2xl font-bold">Blog Posts</h1>
        <BlogList posts={posts} />
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
