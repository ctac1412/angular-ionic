import { Injectable } from '@angular/core';
import { Item } from './items.model';
import { Subject } from 'rxjs';

// http:localhost:5002/

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  // itemsChanged = new Subject<Item[]>();

  private items: Item[] = [
    {
      id: "i1",
      url: "https://tsl.advance-labs.ru",
      name: "tsl",
      method: "GET",
      status: false,
      is_loading: false
    },
    {
      id: "i2",
      url: "https://fgis-nps.advance-labs.ru",
      name: "fgis-nps",
      method: "GET",
      status: false,
      is_loading: false
    }
  ];

  constructor() {}

  getAllItems() {
    return [...this.items];
  }

  getItem(itemId: string) {
    return { ...this.items.find(item => item.id === itemId) };
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  removeItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId);
    // this.itemsChanged.next(this.items);
  }
}
