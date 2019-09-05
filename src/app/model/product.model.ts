class Product {
  productId: number;
   productName: string;
   category: string;
 price: number;
  productStatus: number;
  availableStock: string;
  farmerId: string;

  constructor(productId: number, productName: string, category: string, price: number, productStatus: number, availableStock: string, farmerId: string) {
    this.productId = productId;
    this.productName = productName;
    this.category = category;
    this.price = price;
    this.productStatus = productStatus;
    this.availableStock = availableStock;
    this.farmerId = farmerId;
  }
}
