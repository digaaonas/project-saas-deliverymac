"use client"

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { Button } from "@/components/ui/button";

import { CartContext } from "../../contexts/cart";

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">
}

const ProductHeader = ({product}: ProductHeaderProps) => {
  const router = useRouter()
  const handleBackClick = () => router.back()
  const {toggleCart} = useContext(CartContext)
  const handleToggleCart = () => {
    toggleCart()
  }
  return ( 
    <div className="relative min-h-[300px] w-full">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-contain"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
        >
        <ChevronLeftIcon />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleToggleCart}
      >
        <ScrollTextIcon />
      </Button>
    </div>
   );
}
 
export default ProductHeader;