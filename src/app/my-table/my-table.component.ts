import { Component, OnInit, ElementRef, ChangeDetectorRef, NgZone, AfterViewInit, AfterContentInit } from '@angular/core';
import { Table, TableService } from 'primeng/table';
import { DomHandler } from 'primeng/components/dom/domhandler';
import { ObjectUtils } from 'primeng/components/utils/objectutils';
// import { BlockableUI } from 'primeng/common/blockableui';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  providers: [Table]
})
export class MyTableComponent extends Table implements OnInit, AfterViewInit, AfterContentInit {

  constructor(public el: ElementRef, public zone: NgZone, public tableService: TableService, public cd: ChangeDetectorRef) {
    super(el, zone, tableService, cd);
   }

 
  ngOnInit() {
    console.log(this);
    super.ngOnInit();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  createLazyLoadMetadata() {
    super.createLazyLoadMetadata();
  }
}