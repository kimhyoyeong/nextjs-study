'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogDetailProps } from '@/types/blog';

const BlogDetail = ({ post }: BlogDetailProps) => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.createdAt}</span>
        </div>
      </CardHeader>
      <CardContent>
        <article className="prose max-w-none">
          <p>{post.content}</p>
        </article>
      </CardContent>
    </Card>
  );
};

export default BlogDetail;
