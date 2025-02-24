import { notFound } from "next/navigation";

import { getProductById } from "@/data/get-product-by-id";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{slug: string; productId: string}>
}


const ProductPage = async ({params}: ProductPageProps) => {
  const {slug, productId} = await params
  const product = await getProductById(productId)

  if (!product) {
    return notFound()
  }
  return ( 
    <>
    <div className="relative w-full h-[300px]">
      <ProductHeader product={product}/>
      
    </div>
      <h1>Product Page</h1>
      {productId}
      {slug}
    </>
   );
}
 
export default ProductPage;