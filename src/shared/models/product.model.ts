import data from 'data.json';

export type AllProductsType = typeof data;
export type ProductType = typeof data[0];
export type FeaturesType = typeof data[0]['features'];
