import {StateProduct} from '../enum/state-product.enum';

export interface ProductModel {
  id?: string;
  title: string;
  count: number;
  state: StateProduct;
  agree: boolean;
}
