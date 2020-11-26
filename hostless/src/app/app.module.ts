import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HostComponent } from './host/host.component';
import { JoinComponent } from './join/join.component';
import { PlayComponent } from './play/play.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    JoinComponent,
    PlayComponent,
    GameCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module 
    AngularFireDatabaseModule  // Firebase database module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
