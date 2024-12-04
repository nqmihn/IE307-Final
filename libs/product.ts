import { categories, product } from "@/constants/product";

export const getProductById = (id: number) => {
  return product.find((item) => item.id === id);
};

export const getCategoryById = (id: number) => {
  return categories.find((category) => category.id === id);
};

export const getProductsListByKeyword = (keyword: string) => {
  const lowerKeyword = keyword.toLowerCase().trim();
  if (lowerKeyword === "") {
    return product;
  }
  return product.filter((item) =>
    item.name.toLowerCase().includes(lowerKeyword)
  );
};

export const recommendProduct = (amount: number) => {
  const productIds = product.map((item) => item.id);
  const randomIds = new Set<number>();

  while (randomIds.size < amount) {
    const randomIndex = Math.floor(Math.random() * productIds.length);
    randomIds.add(productIds[randomIndex]);
  }

  return product.filter((item) => randomIds.has(item.id));
};

export const getTopSoldProducts = (amount: number = 5) => {
  return product
    .sort((a, b) => b.sold - a.sold)
    .slice(0, amount);
};

export const getProductNameListByKeyword = (keyword: string) => {
  const lowerKeyword = keyword.toLowerCase();
  return product
    .filter((item) => item.name.toLowerCase().includes(lowerKeyword))
    .map((item) => item.name);
};
