import { Injectable } from '@angular/core';
import { Tasks } from '../todoapp/todoapp.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  getAllTasks(): Tasks[] {
    return [
      {
        id: 1,
        date: '19/ August/2022',
        taskName: 'Workout',
        description: 'Will start at 1900',
      },
      {
        id: 2,
        date: '19/ August/2022',
        taskName: 'Workout',
        description: 'Will start at 1900',
      },
    ];
  }
}
