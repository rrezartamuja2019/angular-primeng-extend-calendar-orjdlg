import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
// import {DialogDemo} from 'primeng/components/dialog';
import {SharedModule} from 'primeng/components/common/shared';
import { Dialog } from 'primeng/dialog';
import {MyCalendarComponent } from './my-calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/components/button/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
	imports: [CommonModule, BrowserAnimationsModule, ButtonModule, FormsModule,
        ReactiveFormsModule,DropdownModule],
    exports: [SharedModule, MyCalendarComponent, BrowserAnimationsModule],
    declarations: [MyCalendarComponent]
})
export class MyCalendarModule {}