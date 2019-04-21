import { ToDoService } from './../to-do.service';
import { ToDo } from './../ToDo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input() toDo: ToDo;
  @Input() index: number;
  private toDoService: ToDoService;
  constructor(private service: ToDoService) {
    this.toDoService = service;
   }

  ngOnInit() {
  }
  onRemove() {
    this.toDoService.removeItem(this.index);
  }
  onDone() {
    this.toDoService.setItemDone(this.index);
  }
}
