import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

import { TextParsingService } from './services/text-parsing.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TextParsingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
