class Customer {
  cusId: number;
  cusName: string;
  cusAddress: string;
  cusPhone: string;
  cusEmail: string;

  constructor(cusId: number, cusName: string, cusAddress: string,
              cusPhone: string, cusEmail: string) {
    this.cusId = cusId;
    this.cusName = cusName;
    this.cusAddress = cusAddress;
    this.cusPhone = cusPhone;
    this.cusEmail = cusEmail;
  }
}
