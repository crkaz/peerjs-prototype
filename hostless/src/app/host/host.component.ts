import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database'; // Firebase modules for Database, Data list and Single object

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
})
export class HostComponent implements OnInit, OnDestroy {
  sessionCode: string;
  gameStateDbRef: AngularFireObject<any>;
  sessionDbRef: AngularFireObject<any>;
  playersDbRef: AngularFireList<any>;
  players: string[] = [];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.initialise();
  }

  ngOnDestroy(): void {
    this.endGame();
  }

  loadPlayers(): void {
    this.playersDbRef = this.db.list(this.sessionCode + '/players');
    this.playersDbRef.push('Admin #' + this.sessionCode);
    this.playersDbRef.valueChanges().subscribe((data) => {
      this.players = data;
    });
  }

  generateSessionCode(nDigits: number = 4): void {
    const gen = Math.pow(10, nDigits - 1);
    const code = Math.floor(gen + Math.random() * 9000).toString();
    //#TODO: check doesn't already exist in db.
    this.sessionCode = code;
  }

  initialise(): void {
    this.generateSessionCode();
    this.loadPlayers();
    this.initGame();
  }

  initGame(): void {
    this.gameStateDbRef = this.db.object(this.sessionCode + '/game');
    this.gameStateDbRef.set({x:0, y:0});
  }

  endGame(): void {
    this.sessionDbRef = this.db.object(this.sessionCode);
    this.sessionDbRef.remove();
  }
}
