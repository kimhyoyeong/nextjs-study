import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogPost } from '@/types/blog';
interface DetailProps {
  post: BlogPost;
}
export default function Detail({ post }: DetailProps) {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span>{post.date}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <article className="prose max-w-none">
          <p>{post.description}</p>
        </article>
      </CardContent>
    </Card>
  );
}
