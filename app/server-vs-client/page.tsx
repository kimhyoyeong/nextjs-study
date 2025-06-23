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

      {/* 비교 설명 */}
      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-purple-600">📊 비교표</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">항목</th>
                <th className="border border-gray-300 p-3 text-left">서버 컴포넌트</th>
                <th className="border border-gray-300 p-3 text-left">클라이언트 컴포넌트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">렌더링 위치</td>
                <td className="border border-gray-300 p-3">서버에서 HTML 생성</td>
                <td className="border border-gray-300 p-3">브라우저에서 JS로 렌더링</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">리액트 훅 사용</td>
                <td className="border border-gray-300 p-3 text-red-600">❌ 불가능</td>
                <td className="border border-gray-300 p-3 text-green-600">✅ useState, useEffect 사용 가능</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">브라우저 API 접근</td>
                <td className="border border-gray-300 p-3 text-red-600">❌ 불가능</td>
                <td className="border border-gray-300 p-3 text-green-600">✅ 가능 (localStorage, window 등)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">SEO 최적화</td>
                <td className="border border-gray-300 p-3 text-green-600">✅ 유리</td>
                <td className="border border-gray-300 p-3 text-red-600">❌ JS 의존성이 높아 불리할 수 있음</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">보안 측면</td>
                <td className="border border-gray-300 p-3 text-green-600">✅ API 키 등 노출 없이 처리 가능</td>
                <td className="border border-gray-300 p-3 text-red-600">❌ API 키 노출 위험 있음</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-medium">사용 예시</td>
                <td className="border border-gray-300 p-3">초기 데이터 로딩, 리스트 출력</td>
                <td className="border border-gray-300 p-3">탭, 버튼, 모달 등 UI 인터랙션 처리</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
