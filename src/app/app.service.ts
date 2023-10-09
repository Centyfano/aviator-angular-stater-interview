import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url: string = 'https://dummyjson.com/products';

  constructor() { }
}
