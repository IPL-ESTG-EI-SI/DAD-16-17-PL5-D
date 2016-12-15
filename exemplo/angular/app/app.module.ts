import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';


import { BoardComponent } from './components/board.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { GameComponent } from './components/game.component';

import { WebsocketsService } from './services/websockets.service'

let routes:any = [
 {path:'', component: LoginComponent},
 {path:'register', component: RegisterComponent},
 {path:'board', component: GameComponent},
]


@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    RegisterComponent,
    GameComponent
  ],
  providers:[
    WebsocketsService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
