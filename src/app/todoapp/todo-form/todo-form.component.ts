import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskServiceService } from 'src/app/task-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private createTask: TaskServiceService) {}
  ngOnInit() {
    this.myForm = new FormGroup({
      taskName: new FormControl('Sammy'),
      description: new FormControl(''),
    });
  }

  onSubmit(form: FormGroup) {
    const tasks = {
      taskName: form.value.taskName,
      description: form.value.description,
    };
    this.createTask.createTask(tasks);
  }
  fetchTask() {}
}
