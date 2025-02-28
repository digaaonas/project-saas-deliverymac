import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../../contexts/cart";
import CartProductItem from "./cart-product-item";
import FinishOrderDialog from "./finish-order-dialog";

const CartSheet = () => {
  const { isOpen, toggleCart, products, total } = useContext(CartContext);
  const [finishOrderDioalogIsOpen, setfinishOrderDioalogIsOpen] = useState(false); 
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[85%]">
        <SheetHeader className="relative">
          <SheetTitle className="left-0 mb-5 flex">Sacola</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto">
            {products.map((product) => (
              <CartProductItem key={product.id} product={product} />
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
          <Button className="mb-5 w-full rounded-full" onClick={() => setfinishOrderDioalogIsOpen(true)}>Finalizar Pedido</Button>
          <FinishOrderDialog open={finishOrderDioalogIsOpen} onOpenChange={setfinishOrderDioalogIsOpen}/>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default CartSheet;
