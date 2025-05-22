/*
-부모로부터 post를 props로 받음
-선택된 포스트의 상세 내용을 표시
 */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogPost } from '@/types/blog';

interface BlogDetailProps {
  post: BlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.tags.join(', ')}</span>
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
