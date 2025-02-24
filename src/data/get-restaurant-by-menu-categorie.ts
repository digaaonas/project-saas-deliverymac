import { db } from "@/lib/prisma";

export const getRestaurantByMenuCatergorie = async (slug: string) => {
  const restaurantMenuCategorie = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategories: {
        include: { products: true },
      },
    },
  });
  return restaurantMenuCategorie;
};
