class Productorder {
 orderId: number;
 orderDate: string;
orderStatus: string;
 productId: number;
 cusId: number;
 paymentMethod: string;


  constructor(orderId: number, orderDate: string, orderStatus: string, productId: number, cusId: number, paymentMethod: string) {
    this.orderId = orderId;
    this.orderDate = orderDate;
    this.orderStatus = orderStatus;
    this.productId = productId;
    this.cusId = cusId;
    this.paymentMethod = paymentMethod;
  }
}
