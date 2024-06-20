import {
  Component, OnDestroy, Renderer2, NgZone, AfterViewInit, ComponentFactoryResolver, ChangeDetectorRef
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DynamicDialogConfig } from 'primeng/components/dynamicdialog/dynamicdialog-config';
import { DynamicDialogRef } from 'primeng/components/dynamicdialog/dynamicdialog-ref';

import { DynamicDialogComponent } from 'primeng/components/dynamicdialog/dynamicdialog';


@Component({
  selector: 'c9-dinamic-dialog',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css'],
  animations: [
    trigger('animation', [
      state('void', style({
        transform: 'translateX(-50%) translateY(-50%) scale(0.7)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(-50%) translateY(-50%) scale(1)',
        opacity: 1
      })),
      transition('* => *', animate('{{transitionParams}}'))
    ])
  ],
  providers: [DynamicDialogRef]
})
export class C9DinamicDialogComponent extends DynamicDialogComponent implements AfterViewInit, OnDestroy {

  constructor(componentFactoryResolver: ComponentFactoryResolver, cd: ChangeDetectorRef, renderer: Renderer2,
    config: DynamicDialogConfig, dialogRef: DynamicDialogRef, zone: NgZone) {
    super(componentFactoryResolver, cd, renderer, config, dialogRef, zone);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}