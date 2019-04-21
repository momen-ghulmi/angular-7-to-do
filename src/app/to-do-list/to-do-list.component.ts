import { ToDoService } from './../to-do.service';
import { ToDo } from './../ToDo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDo[] =  [];
  toDoService: ToDoService;
  constructor(private service: ToDoService) {
    this.toDoService = service;
  }

  ngOnInit() {
    this.toDoList = this.toDoService.getItems();
  }

}
