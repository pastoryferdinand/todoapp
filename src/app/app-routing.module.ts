import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoappComponent } from './todoapp/todoapp.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'todoapp', component: TodoappComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
