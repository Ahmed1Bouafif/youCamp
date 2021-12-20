import { Injectable } from '@angular/core';
import {Item} from './itemsInterface';

@Injectable()
export class SharedService {
  public items: Item[] =[]

  addItem(item: Item) {
    this.items.push(item);
    }

  getItems(): Item[] {
    console.log('working here');
    console.log(this.items);
    return this.items;
    
    
    }
}
