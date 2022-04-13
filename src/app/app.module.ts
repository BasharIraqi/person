import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PersonComponent } from './person/person.component';
import {Routes,RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {path:'person',component:TableComponent},
  {path:'person/:id',component:PersonComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
