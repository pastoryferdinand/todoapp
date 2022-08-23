import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { TodoappComponent } from './todoapp/todoapp.component';

import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    CalculatorComponent,
    TodoappComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
