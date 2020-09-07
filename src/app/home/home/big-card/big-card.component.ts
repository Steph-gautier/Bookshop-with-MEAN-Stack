import { Component, OnInit, Input } from '@angular/core';

export interface Section{
  title:string;
  description: string;
}

@Component({
  selector: 'big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  public box : Section[] = [
    {title:'Flash Deals', description:'Get now your Myeazyschool Tablets with all the e-leaning software installed and ready for use now!'},
    {title:'Most Popular', description:'Those products that are so popular due to their quality and fiability. We are here for facilitating your the learning process'}
]
  constructor() { 

  }

  ngOnInit() {
  }

}
