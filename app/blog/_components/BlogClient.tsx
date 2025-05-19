'use client';

import { useState } from 'react';
import List from './List';
import Detail from './Detail';
import { BlogPost } from '@/types/blog';

interface BlogClientProps {
  initialPosts: BlogPost[];
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleSelectPost = (postId: number | null) => {
    if (postId === null) {
      setSelectedPost(null);
    } else {
      setSelectedPost(initialPosts.find((post) => post.id === postId) ?? null);
    }
  };

  return (
    <>
      <div className="w-1/3 border-r p-4">
        <h1 className="mb-4 text-2xl font-bold">Blog Posts</h1>
        <List
          posts={initialPosts}
          onSelectPost={handleSelectPost}
          selectedPostId={selectedPost?.id ?? null}
        />
      </div>
      <div className="flex-1 p-4">
        {selectedPost ? (
          <Detail post={selectedPost} />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            왼쪽에서 블로그 포스트를 선택해주세요.
          </div>
        )}
      </div>
    </>
  );
}
