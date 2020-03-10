import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() gridData: Data
  constructor() { }

  ngOnInit() {
  }

}
