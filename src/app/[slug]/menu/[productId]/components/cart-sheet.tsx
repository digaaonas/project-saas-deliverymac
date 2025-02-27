import { ChevronLeftIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../../contexts/cart";
import CartProductItem from "./cart-product-item";
import { Card, CardContent } from "@/components/ui/card";

const CartSheet = () => {
    const {isOpen, toggleCart, products, total} = useContext(CartContext)
    const [quantity, setQuantity] = useState<number>(1)
      const handleDecreaseQuantity = () => {
        setQuantity((prev) => {
          if (prev == 1){
            return 1
          }
          return prev - 1
        })
      }
      const handleIncreaseQuantity = () => {
        
        setQuantity((prev) => prev + 1)
        
        }
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
              <Button className="w-full rounded-full mb-5">Finalizar Pedido</Button>
            </div>
        </SheetContent>
      </Sheet>
   );
}
export default CartSheet;