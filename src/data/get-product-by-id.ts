import { db } from "@/lib/prisma";

export const getProductById = async (id: string) => {
  const productInfos = await db.product.findUnique({ where: { id }});
  return productInfos;
};