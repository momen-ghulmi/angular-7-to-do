import { ToDoService } from './../to-do.service';
import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss']
})
export class ToDoAddComponent implements OnInit {
  private toDoService: ToDoService;
  @Input() label;
  constructor(private service: ToDoService) {
      this.toDoService  = service;
   }

  ngOnInit() {
  }
  onClick() {
    let itemId = this.toDoService.getItems().length + 1;
    if(this.label !== '' && this.label !== undefined) {
    let toDo: ToDo = {
      id: itemId,
      label: this.label,
      done: false
    };
    this.toDoService.addItem(toDo);
    this.label = '';
  }
    }
  }
