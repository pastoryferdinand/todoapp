import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { TodoFormComponent } from './todoapp/todo-form/todo-form.component';
import { TodoappComponent } from './todoapp/todoapp.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: '', component: HomeComponent },
  { path: 'todoapp', component: TodoappComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
