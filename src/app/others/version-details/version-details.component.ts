import { Component, OnInit,VERSION } from '@angular/core';

@Component({
  selector: 'app-version-details',
  templateUrl: './version-details.component.html',
  styleUrls: ['./version-details.component.css']
})
export class VersionDetailsComponent implements OnInit {
  version = VERSION.full;
  constructor() { }

  ngOnInit(): void {
  }

}
