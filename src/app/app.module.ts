import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { TodoappComponent } from './todoapp/todoapp.component';

import { CalculatorService } from './calculator.service';
import { TodoFormComponent } from './todoapp/todo-form/todo-form.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskServiceService } from './task-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    CalculatorComponent,
    TodoappComponent,
    TodoFormComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CalculatorService, TaskServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
