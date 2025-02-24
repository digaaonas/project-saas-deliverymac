"use client"

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">
}

const ProductHeader = ({product}: ProductHeaderProps) => {
  const router = useRouter()
  const handleBackClick = () => router.back()
  return ( 
    <div className="w-[390px] h-[332px] flex p-2">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={390}
        height={356}
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
        >
        <ScrollTextIcon />
      </Button>
    </div>
   );
}
 
export default ProductHeader;