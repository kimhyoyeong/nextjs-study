'use client';

import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// 장바구니 컴포넌트
export function Cart() {
  // Context에서 필요한 상태와 함수들을 가져옴
  const { cartItems, removeFromCart, totalPrice } = useCart();

  // 장바구니가 비어있을 때의 UI
  if (cartItems.length === 0) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>장바구니</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500">장바구니가 비어있습니다.</p>
        </CardContent>
      </Card>
    );
  }

  // 장바구니에 상품이 있을 때의 UI
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>장바구니</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.price.toLocaleString()}원
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
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
      </CardContent>
    </Card>
  );
} 