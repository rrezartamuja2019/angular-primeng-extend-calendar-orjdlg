import {
  NgModule, Component, ElementRef, OnDestroy, Input, Output, EventEmitter, Renderer2,
  ContentChildren, QueryList, ViewChild, NgZone, ChangeDetectorRef, OnInit
} from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { Calendar } from 'primeng/calendar';
import { DomHandler } from 'primeng/components/dom/domhandler';
import { ButtonModule } from 'primeng/components/button/button';
import { ObjectUtils } from 'primeng/components/utils/objectutils';
// import { BlockableUI } from 'primeng/common/blockableui';

@Component({
  selector: 'c-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss'],
  animations: [
    trigger('overlayAnimation', [
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('visibleTouchUI', style({
        transform: 'translate(-50%,-50%)',
        opacity: 1
      })),
      transition('void => visible', [
        style({ transform: 'translateY(5%)', opacity: 0 }),
        animate('{{showTransitionParams}}')
      ]),
      transition('visible => void', [
        animate(('{{hideTransitionParams}}'),
          style({
            opacity: 0,
            transform: 'translateY(5%)'
          }))
      ]),
      transition('void => visibleTouchUI', [
        style({ opacity: 0, transform: 'translate3d(-50%, -40%, 0) scale(0.9)' }),
        animate('{{showTransitionParams}}')
      ]),
      transition('visibleTouchUI => void', [
        animate(('{{hideTransitionParams}}'),
          style({
            opacity: 0,
            transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
          }))
      ])
    ])
  ]
})
export class MyCalendarComponent extends Calendar implements OnDestroy, OnInit {
  hours: number[] = [];
  minutes: any[] = [0, 30];
  periods: string[] = ['AM', 'PM'];
  fromHour: number = 12;
  toHour: number = 6;
  fromPeriod: string = 'AM';
  fromMinute: number = 0;
  toMinute: number = 0;
  toPeriod: string = 'PM';
  @Input() showDefault: boolean = true;
  today: Date = new Date();
  wasSentBack: boolean = false;

  constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, zone: NgZone) {
    super(el, renderer, cd, zone);
  }

  onTimeChange(event) {
    this.clearTimePickerTimer();
    this.updateTime();
  }

  updateTime() {
    if (this.isRangeSelection()) {
      if (this.value) {
        if (this.value[0]) {
          let hour = +this.fromHour;
          console.log(this.fromPeriod)
          if (hour === 12)
            this.value[0].setHours(this.fromPeriod === 'PM' ? 12 : 0);
          else
            this.value[0].setHours(this.fromPeriod === 'PM' ? hour + 12 : hour);
          this.value[0].setMinutes(this.fromMinute);
        }
        if (this.value[1]) {
          let hour = +this.toHour;
          if (hour === 12)
            this.value[1].setHours(this.toPeriod === 'PM' ? 12 : 0);
          else
            this.value[1].setHours(this.toPeriod === 'PM' ? hour + 12 : hour);
          this.value[1].setMinutes(this.toMinute);
        }
      }

    }
    super.updateModel(this.value);
    super.updateInputfield();
  }

  onInputClick() {
    if(this.wasSentBack) {
      return;
    }
    this.wasSentBack = true;
    const e = new Event('mouse');
    super.navBackward(e);
  }

  onDateSelect($event,date) {
    super.onDateSelect($event,date);
    this.updateTime()
  }


  onApply() {
    super.hideOverlay();
    
  }

  onClearButtonClick(event) {
    this.wasSentBack = false;
    super.onClearButtonClick(event);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  ngOnInit() {

    for (let i = 1; i <= 12; i++) {
      this.hours.push(i);
    }
  }


}