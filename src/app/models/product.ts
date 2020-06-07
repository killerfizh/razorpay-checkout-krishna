export class Product {
  id: number;
  product_name: string;
  product_price: number;
  department: any;
  product_material;
  product;
  product_color;
  product_adjective;

  constructor(id, product_name, product_price = 0) {
    this.id = id
    this.product_name = product_name
    this.product_price = product_price
  }
}
