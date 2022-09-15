import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Tasks } from './todoapp.model';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
})
export class TodoappComponent implements OnInit {
  tasks: Tasks[];

  constructor(private apiSvc: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.apiSvc.getAllTasks();
  }

  deleteTask(item: Tasks) {
    const index = this.tasks.indexOf(item);
    if (index != -1) {
      [...this.tasks, this.tasks.splice(index, 1)];
    }
  }

  addTask() {}
}
