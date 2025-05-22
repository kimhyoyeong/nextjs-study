'use client';

import { BlogPost } from '@/types/blog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

interface ListItemProps {
  post: BlogPost;
  isActive: boolean;
}

const ListItem = memo(function ListItem({ post, isActive }: ListItemProps) {
  console.log('렌더링됨:', post.slug, isActive);
  return (
    <Link
      href={isActive ? '/blog3' : `/blog3/${post.slug}`}
      className={`block w-full rounded-lg border p-4 text-left transition-colors hover:bg-gray-50 ${
        isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
      }`}>
      <h3 className="font-medium text-gray-900">{post.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{post.date}</p>
    </Link>
  );
});

/* const ListItem = function ListItem({ post, isActive }: ListItemProps) {
  console.log('렌더링됨:', post.slug, isActive);
  return (
    <Link
      href={isActive ? '/blog3' : `/blog3/${post.slug}`}
      className={`block w-full rounded-lg border p-4 text-left transition-colors hover:bg-gray-50 ${
        isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
      }`}>
      <h3 className="font-medium text-gray-900">{post.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{post.date}</p>
    </Link>
  );
}; */

interface ListProps {
  posts: BlogPost[];
}

export default function List({ posts }: ListProps) {
  const pathname = usePathname();

  const isBlogRoot = pathname === '/blog3';
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
