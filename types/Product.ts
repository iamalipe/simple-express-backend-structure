export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: Category;
  image: string;
};

export type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
};

export type ChangeLog = {
  id: number;
  module: string;
  description: string;
  date: Date;
  user: User;
  oldValue: string;
  newValue: string;
};
