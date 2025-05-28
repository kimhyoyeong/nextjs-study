'use client';

import ListItem from './ListItem';
import type { BlogPost } from '@/types/blog';
//import { useEffect } from 'react';
import { useParams } from 'next/navigation';

interface ListProps {
  posts: BlogPost[];
}

export default function List({ posts }: ListProps) {
  const params = useParams();
  const currentSlug = params?.slug ?? null;
  console.log('🔁 useParams:', params);

  // mount 시점에만 실행
  //useEffect(() => {
  //   console.log('List.client.tsx가 mount됨! currentSlug:', currentSlug);
  // }, []); // 빈 배열이면 mount 시점에만 실행

  return (
    <div className="space-y-2">
      {posts.map((post) => {
        const isActive = currentSlug === post.slug;
        return <ListItem key={post.id} post={post} isActive={isActive} />;
      })}
    </div>
  );
}
