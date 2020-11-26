import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  sessionCode;

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.sessionCode = this.actRoute.snapshot.paramMap.get('id');
  }
}
