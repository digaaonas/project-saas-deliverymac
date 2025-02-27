import { ChevronLeftIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../../contexts/cart";
import CartProductItem from "./cart-product-item";

const CartSheet = () => {
    const {isOpen, toggleCart, products} = useContext(CartContext)
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
            <div className="py-5">
              {products.map(product => (
                <CartProductItem key={product.id} product={product}/>
              ))}
            </div>
        </SheetContent>
      </Sheet>
   );
}
export default CartSheet;