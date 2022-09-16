import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Modeli } from './modeli';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor(private http: HttpClient) {}
  createTask(tasks: { taskName: string; description: string }) {
    const headers = new HttpHeaders({ MyHeader: 'Tasks Posts' });
    this.http
      .post<{ name: string }>(
        'https://todoapp-cd153-default-rtdb.firebaseio.com/posts.json',
        tasks,
        { headers: headers }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchTask() {
    return this.http
      .get<{ [key: string]: Modeli }>(
        'https://todoapp-cd153-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((res) => {
          const tasks = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              tasks.push({ ...res[key], id: key });
            }
          }
          return tasks;
        })
      );
  }
  deleteTask() {}
}
