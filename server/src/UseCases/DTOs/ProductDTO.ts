export interface ProductDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  active: boolean;
  createdAt: Date;
};