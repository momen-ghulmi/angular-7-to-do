import { Injectable } from '@angular/core';
import { ToDo } from './ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private toDoItems: ToDo[] = [];
  private myStorage = null;
  private key = 'toDoApp.toDo';
  constructor() {
    this.myStorage = window.localStorage;
    let items = this.myStorage.getItem(this.key);
    if(items !== null) {
      items = JSON.parse(items);
      if(items.constructor == Array) {
        this.toDoItems = items;
      }
    }
   }

   getItems() {
     return this.toDoItems;
   }

   setItems(items: ToDo[]) {
      this.toDoItems = items;
      this.myStorage.setItem(this.key, JSON.stringify(this.toDoItems));
   }

   addItem(item: ToDo) {
      this.toDoItems.push(item);
      this.myStorage.setItem(this.key, JSON.stringify(this.toDoItems));
   }
   removeItem(index: number) {
      this.toDoItems.splice(index, 1);
      this.myStorage.setItem(this.key, JSON.stringify(this.toDoItems));
   }
   setItemDone(index) {
     this.toDoItems[index].done = true;
     this.myStorage.setItem(this.key, JSON.stringify(this.toDoItems));

   }
}
