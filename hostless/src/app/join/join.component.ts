import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database'; // Firebase modules for Database, Data list and Single object

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit {
  playerCode: string;
  sessionDbRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private router: Router) {}

  ngOnInit(): void {}

  join(sessionCode): void {
    // TODO: if code exists in database
    this.generatePlayerCode(); // generate player code
    this.addPlayerToSession(sessionCode); // add player code to database
    this.router.navigate(['/play/' + sessionCode]);
  }

  generatePlayerCode(nDigits: number = 4): void {
    const gen = Math.pow(10, nDigits - 1);
    const code = Math.floor(gen + Math.random() * 9000);
    //#TODO: check doesn't already exist in db.
    this.playerCode = 'player #' + code;
  }

  addPlayerToSession(sessionCode): void {
    this.sessionDbRef = this.db.list(sessionCode + '/players');
    this.sessionDbRef.push(this.playerCode);
  }
}
