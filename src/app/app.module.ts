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
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
