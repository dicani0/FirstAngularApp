import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  hidden = true;
  clicks = [];
  constructor() { }
  toggleContent() {
    this.hidden = this.hidden === true ? this.hidden = false : this.hidden = true;
    this.clicks.push(Date.now());
  }
  ngOnInit(): void {
  }

}
