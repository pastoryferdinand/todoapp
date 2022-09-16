import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { TaskServiceService } from '../task-service.service';
import { Tasks } from './todoapp.model';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
})
export class TodoappComponent implements OnInit {
  tasks: TaskServiceService[] = [];

  constructor(private getTasks: TaskServiceService) {}

  ngOnInit(): void {
    this.getTasks.fetchTask().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // deleteTask(item: Tasks) {
  //   const index = this.tasks.indexOf(item);
  //   if (index != -1) {
  //     [...this.tasks, this.tasks.splice(index, 1)];
  //   }
}
