import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Loading() {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <div className="h-8 w-3/4 rounded bg-gray-200" />
        <div className="mt-2 h-4 w-1/4 rounded bg-gray-200" />
        <div className="mt-3 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 rounded-full bg-gray-200" />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
          <div className="h-4 w-4/6 rounded bg-gray-200" />
        </div>
      </CardContent>
    </Card>
  );
}
