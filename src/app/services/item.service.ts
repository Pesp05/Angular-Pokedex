import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, ItemListResponse } from '../models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemList(): Observable<ItemListResponse>{
    return this.http.get<ItemListResponse>('https://pokeapi.co/api/v2/item');
  }

}
