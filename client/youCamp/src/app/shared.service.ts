import { Injectable } from '@angular/core';
import {Item} from './itemsInterface';

@Injectable()
export class SharedService {
  public items: Item[] =[]

  addItem(item: Item) {
    this.items.push(item);
    }

  getItems(): Item[] {
    return this.items;
    }
}
