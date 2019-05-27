import { Injectable } from '@angular/core';
import { RequestItem } from './interfaces/request-item.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  actualRequestList: RequestItem[];
  constructor() {}

  getList() {
    return [...this.actualRequestList];
  }

  getRequest(itemId: number) {
    if (!this.actualRequestList) {
      return undefined;
    }
    return { ...this.actualRequestList.find(item => item.id === itemId) };
  }

}
