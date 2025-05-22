import { getPublishedPosts } from '@/lib/notion';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPublishedPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) return notFound();

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span>{post.date}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <article className="prose max-w-none">
          <p>{post.description}</p>
        </article>
      </CardContent>
    </Card>
  );
}
