import { getPublishedPosts } from '@/lib/notion';

export default async function ServerComponent() {
  // 서버에서 직접 데이터 가져오기
  const posts = await getPublishedPosts();

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-800">서버 컴포넌트 특징:</h3>
        <ul className="mt-2 space-y-1 text-sm text-blue-700">
          <li>• 서버에서 데이터를 가져와서 HTML 생성</li>
          <li>• 브라우저에서 JS 실행 없이 바로 콘텐츠 표시</li>
          <li>• API 키 등 민감한 정보 노출 없음</li>
          <li>• SEO에 유리</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-2 font-medium">📝 블로그 포스트 목록 (서버에서 렌더링):</h4>
        <div className="space-y-2">
          {posts.map((post) => (
            <div key={post.id} className="rounded border bg-white p-3">
              <h5 className="font-medium">{post.title}</h5>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
