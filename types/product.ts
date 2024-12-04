export interface IProductBase {
  id: number;
  name: string;
  price: number;
  sold: number;
  categoryId: number;
  rate: number;
  description: string;
  variants: string[];
};

export interface IProductCard {
  id: number;
  name: string;
  price: number;
  sold: number;
}
