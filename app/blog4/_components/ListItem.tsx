import Link from 'next/link';
import type { BlogPost } from '@/types/blog';
import { memo } from 'react';

interface ListItemProps {
  post: BlogPost;
  isActive: boolean;
}

const ListItem = memo(function ListItem({ post, isActive }: ListItemProps) {
  console.log('렌더링됨:', post.slug, isActive);
  return (
    <Link
      href={isActive ? '/blog4' : `/blog4/${post.slug}`}
      className={`block w-full rounded-lg border p-4 text-left transition-colors hover:bg-gray-50 ${
        isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
      }`}>
      <h3 className="font-medium text-gray-900">{post.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{post.date}</p>
    </Link>
  );
});

export default ListItem;
