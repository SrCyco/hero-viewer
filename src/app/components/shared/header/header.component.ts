import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isBack: boolean;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backPage() {
    this.location.back();
  }

}
