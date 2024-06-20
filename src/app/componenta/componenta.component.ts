import {
  NgModule, Component, ElementRef, OnDestroy, Input, Output, EventEmitter, Renderer2,
  ContentChildren, QueryList, ViewChild, NgZone, AfterViewInit, ComponentFactoryResolver, ChangeDetectorRef,
} from '@angular/core';
import {DynamicDialogRef} from 'primeng/components/common/api';
import {DynamicDialogConfig} from 'primeng/components/common/api';

@Component({
  selector: 'componenta',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.css']
})

export class Componenta {
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
}