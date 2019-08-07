import { Injectable } from '@angular/core';

import { Product } from './product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string="http://localhost:3000/products";
  filtereddata:Product[];
  constructor(private http:HttpClient) { }
  
  addProduct(product:Product){
    return this.http.post(this.url,product);
  }
  getAllProducts(){
    return this.http.get<Product[]>(this.url); 
  }
  
  getProduct(id:number){
    return this.http.get<Product>(this.url+"/"+id);
  }
  
  deleteProduct(product:Product){
    return this.http.delete<Product[]>(this.url+"/"+product.id);
  }
 setSearcheddata(searchedData:Product[]){
   this.filtereddata=searchedData;
   return this.http.get<Product[]>(this.url); 
 }
 getSearchedData(searchData:Product[]){
   this.filtereddata=searchData;
 }
}

 

 

