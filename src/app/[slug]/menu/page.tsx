import { notFound } from "next/navigation";

//import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

interface RestauranteMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestauranteMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  //const restaurant = getRestaurantBySlug(slug);

  return (
    <h1>
      {slug} {consumptionMethod}
    </h1>
  );
};

export default RestaurantMenuPage;
