import { Component, OnInit } from '@angular/core';
import { Tasks } from './todoapp.model';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
})
export class TodoappComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.tasks);
  }
  tasks: Tasks[] = [
    {
      id: 1,
      date: '19/ August/2022',
      taskName: 'Workout',
      description: 'Will start at 1900',
    },
    {
      id: 1,
      date: '19/ August/2022',
      taskName: 'Workout',
      description: 'Will start at 1900',
    },
  ];
}
