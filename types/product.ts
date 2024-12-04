export interface IProductBase {
  id: number;
  name: string;
  price: number;
  sold: number;
  categoryId: number;
  rate: number;
  description: string;
  variants: string[];
  image: string[];
};

export interface IProductCard {
  id: number;
  name: string;
  price: number;
  sold: number;
  image: string[];
}
