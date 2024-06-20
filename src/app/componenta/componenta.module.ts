import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
// import {DialogDemo} from 'primeng/components/dialog';
import {SharedModule} from 'primeng/components/common/shared';
import { Dialog } from 'primeng/dialog';
import { Componenta } from './componenta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	imports: [CommonModule, BrowserAnimationsModule],
    exports: [SharedModule, Componenta, BrowserAnimationsModule],
    declarations: [Componenta],
    entryComponents: [Componenta]
})
export class ComponentaModule {}