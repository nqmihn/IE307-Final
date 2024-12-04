import { categories, product } from "@/constants/product";

export const getProductById = (id: number) => {
  return product.find((item) => item.id === id);
};

export const getCategoryById = (id: number) => {
  return categories.find((category) => category.id === id);
};

export const searchProductsByKeyword = (keyword: string) => {
  const lowerKeyword = keyword.toLowerCase();
  return product.filter((item) =>
    item.name.toLowerCase().includes(lowerKeyword)
  );
};

export const getProductNameListByKeyword = (keyword: string) => {
  const lowerKeyword = keyword.toLowerCase();
  return product
    .filter((item) => item.name.toLowerCase().includes(lowerKeyword))
    .map((item) => item.name);
}