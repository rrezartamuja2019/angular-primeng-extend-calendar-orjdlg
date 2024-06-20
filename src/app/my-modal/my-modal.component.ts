import {
  NgModule, Component, ElementRef, OnDestroy, Input, Output, EventEmitter, Renderer2,
  ContentChildren, QueryList, ViewChild, NgZone
} from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { Dialog } from 'primeng/dialog';
import { DomHandler } from 'primeng/components/dom/domhandler';
import { ObjectUtils } from 'primeng/components/utils/objectutils';
// import { BlockableUI } from 'primeng/common/blockableui';

@Component({
  selector: 'c9-dialog',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css'],
  animations: [
    trigger('animation', [
      state('void', style({
        transform: 'scale(0.7)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'none',
        opacity: 1
      })),
      transition('* => *', animate('{{transitionParams}}'))
    ])
  ]
})
export class MyDialogComponent extends Dialog implements OnDestroy {
  appendTo: string = 'body';
  draggable: boolean = false;
  modal: boolean = true;
  positionTop: number = 50;
  baseZIndex: number = 2500;

  constructor(public el: ElementRef, public rendered: Renderer2, public zone: NgZone) {
    super(el, rendered, zone);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}