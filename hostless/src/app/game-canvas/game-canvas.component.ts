import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database'; // Firebase modules for Database, Data list and Single object

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css'],
})
export class GameCanvasComponent implements AfterViewInit {
  @Input() sessionCode;
  @ViewChild('myCanvas', { static: false })
  myCanvas: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D;
  gameStateDbRef: AngularFireObject<any>;
  x: number = 0;
  y: number = 0;

  constructor(private db: AngularFireDatabase) {}

  get GameModel() {
    return { x: this.x, y: this.y };
  }

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
    this.initialiseGameModel();
  }

  initialiseGameModel(): void {
    this.gameStateDbRef = this.db.object(this.sessionCode + '/game');
    this.gameStateDbRef.valueChanges().subscribe((data) => {
      console.log('Receiving updates from server...');
      console.log(data);
      this.x = data.x;
      this.y = data.y;
      this.redrawCanavas();
    });
  }

  redrawCanavas(): void {
    this.context.clearRect(0, 0, 300, 300); // Clear
    this.context.fillRect(this.x, this.y, 25, 25);
  }

  move(dir): void {
    // Update locally.
    switch (dir) {
      case 'left':
        this.x -= 3;
        break;
      case 'right':
        this.x += 3;
        break;
      case 'down':
        this.y += 3;
        break;
      case 'up':
        this.y -= 3;
        break;
    }

    // Update server (which will also push updates back to client).
    console.log('Sending updates to server...');
    console.log(this.GameModel);
    this.gameStateDbRef.update(this.GameModel);
  }
}
