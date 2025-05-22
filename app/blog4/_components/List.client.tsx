'use client';

import { usePathname } from 'next/navigation';
import ListItem from './ListItem';
import type { BlogPost } from '@/types/blog';

interface ListProps {
  posts: BlogPost[];
}

export default function List({ posts }: ListProps) {
  const pathname = usePathname();
  const isBlogRoot = pathname === '/blog4';
  const currentSlug = isBlogRoot ? null : pathname.split('/').pop();

  return (
    <div className="space-y-2">
      {posts.map((post) => {
        const isActive = currentSlug === post.slug;
        return <ListItem key={post.id} post={post} isActive={isActive} />;
      })}
    </div>
  );
}
