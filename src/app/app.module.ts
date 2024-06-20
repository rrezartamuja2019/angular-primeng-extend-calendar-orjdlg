import { NgModule, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDialogModule } from './my-modal/my-modal.module';
import { TableService, TableModule } from 'primeng/table';
import { CarService } from './service/carservice';
// import {DynamicDialogModule} from 'primeng/dynamicdialog';
// import { DialogService } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import {ComponentaModule} from './componenta/componenta.module';

import { C9DinamicDialogComponent } from './dd/dd.component';
import { C9DialogService } from './dd/ddservice';
import { MyCalendarModule } from './my-calendar/my-calendar.module';



@NgModule({
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, FormsModule, PaginatorModule, MyDialogModule, ComponentaModule, MyCalendarModule],
  declarations: [AppComponent, HelloComponent, PaginatorComponent, C9DinamicDialogComponent],
  providers: [TableService, CarService, C9DialogService, MessageService],
  bootstrap: [AppComponent],
  entryComponents: [C9DinamicDialogComponent]
})
export class AppModule {
  constructor(public dialogService: C9DialogService, public messageService: MessageService){}
  today = new Date();
 }
