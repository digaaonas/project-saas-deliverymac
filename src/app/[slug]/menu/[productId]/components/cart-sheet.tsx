import { useContext } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../../contexts/cart";
import CartProductItem from "./cart-product-item";
import FinishOrderButton from "./finish-order-button";

const CartSheet = () => {
  const {isOpen, toggleCart, products, total} = useContext(CartContext)
  return ( 
    <Sheet open={isOpen} onOpenChange={toggleCart}>
        <SheetContent className="w-[85%]">
          <SheetHeader className="relative">
            <SheetTitle className="flex left-0 mb-5">Sacola</SheetTitle>
          </SheetHeader>
            <div className="py-5 flex flex-col h-full">
              <div className="flex-auto">
                {products.map(product => (
                  <CartProductItem key={product.id} product={product}/>
                ))}
              </div>
              <Card className="mb-5">
                <CardContent className="p-5 text-xl font-semibold">
                  <div className="flex justify-between">
                    <p>Total</p>
                    <p>{formatCurrency(total)}</p>
                  </div>
                </CardContent>
              </Card>
              <FinishOrderButton/>
            </div>
        </SheetContent>
      </Sheet>
   );
}
export default CartSheet;