import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent extends Paginator implements OnInit {

  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }

  ngOnInit() {
  }

}