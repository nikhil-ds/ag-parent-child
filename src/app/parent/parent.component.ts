import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Representational class for api data
export class Data {
  name: string;
  id: number;
}

// Get this data from api
const dummyData: Data[] = [
  {
    name: 'nikhil',
    id: 1
  },
  {
    name: 'hitechi',
    id: 2
  }
]

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy {

  public rawData: Data[];
  public $userData = new BehaviorSubject<Data[]>(this.rawData)
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.$userData.next(dummyData);   
    }, 3000);
  }

  ngOnDestroy() {
    console.log('ondestroy called')
    this.$userData.unsubscribe()
  }

}
