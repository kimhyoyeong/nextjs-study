/*
-부모로부터 posts, onSelectPost, selectedPostId를 props로 받음
-포스트 목록을 표시하고 선택 이벤트를 부모에게 전달
 */

import { BlogListProps } from '@/types/blog';

export default function BlogList({ posts, onSelectPost, selectedPostId }: BlogListProps) {
  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <button
          key={post.id}
          onClick={() => {
            const isSelected = selectedPostId === post.id; // 지금 클릭한 게시글이 이미 선택된 상태인지 확인
            onSelectPost(isSelected ? null : post.id); //onSelectPost 함수 호출해서 부모의 selectedPost 상태를 업데이트
          }}
          className={`w-full rounded-lg border p-3 text-left hover:bg-gray-100 ${
            selectedPostId === post.id ? 'bg-gray-100' : ''
          }`}
        >
          <h3 className="font-medium">{post.title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {post.author} • {post.createdAt}
          </p>
        </button>
      ))}
    </div>
  );
}
