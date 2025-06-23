import ServerComponent from './_components/ServerComponent';
import ClientComponent from './_components/ClientComponent';

export default function ServerVsClientPage() {
  return (
    <div className="space-y-8">
      {/* 서버 컴포넌트 예제 */}
      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-blue-600">🖥️ 서버 컴포넌트 예제</h2>
        <p className="mb-4 text-gray-600">서버에서 데이터를 가져와서 HTML을 생성합니다. 브라우저에서 JS 실행 없이 바로 콘텐츠를 볼 수 있습니다.</p>
        <ServerComponent />
      </section>

      {/* 클라이언트 컴포넌트 예제 */}
      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-green-600">💻 클라이언트 컴포넌트 예제</h2>
        <p className="mb-4 text-gray-600">브라우저에서 JS로 데이터를 가져와서 렌더링합니다. useState, useEffect 등 리액트 훅을 사용할 수 있습니다.</p>
        <ClientComponent />
      </section>
    </div>
  );
}
