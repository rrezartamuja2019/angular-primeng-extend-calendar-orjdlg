import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
// import {DialogDemo} from 'primeng/components/dialog';
import {SharedModule} from 'primeng/components/common/shared';
import { Dialog } from 'primeng/dialog';
import {MyDialogComponent } from './my-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	imports: [CommonModule, BrowserAnimationsModule],
    exports: [Dialog,SharedModule, MyDialogComponent, BrowserAnimationsModule],
    declarations: [Dialog, MyDialogComponent]
})
export class MyDialogModule {}