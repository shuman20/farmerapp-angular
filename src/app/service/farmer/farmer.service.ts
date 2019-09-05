import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Farmer} from "../../model/farmer.model";

// @ts-ignore
@Injectable()
export class FarmerService {
  constructor(private http: HttpClient) {
  }

  getAllActiveFarmers() {
    return this.http.get('http://localhost:8080/farmers/active');

  }

  create(farmer: Farmer) {
    return this.http.post('http://localhost:8080/farmer', farmer);
  }

  update(farmer: Farmer) {
    return this.http.put('http://localhost:8080/farmer', farmer);
  }
}
