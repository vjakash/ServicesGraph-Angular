import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { GraphsComponent } from './graphs/graphs.component';
import { NgChartjsModule } from 'ng-chartjs';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
