import {Product} from './product';
import {Orders} from './orders';

export interface OrderDetail {
  orderDerailId?: number;
  amount?: number;
  product?: Product;
  orders?: Orders;
}
