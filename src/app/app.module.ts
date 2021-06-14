import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components 
import { AppComponent } from './app.component';
import { EmployeListComponent } from './components/employe-list/employe-list.component';
import { CountEmployeComponent } from './components/employe-list/count-employe/count-employe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    CountEmployeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
