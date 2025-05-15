'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/cart';

// Cart 컴포넌트 props 인터페이스
interface CartProps {
  items: Product[];
  onRemoveItem: (productId: number) => void;
  totalPrice: number;
}

export function Cart({ items, onRemoveItem, totalPrice }: CartProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>장바구니</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <p className="text-center text-gray-500">장바구니가 비어있습니다.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price.toLocaleString()}원</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => onRemoveItem(item.id)}>
                  삭제
                </Button>
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>총 금액:</span>
                <span>{totalPrice.toLocaleString()}원</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
