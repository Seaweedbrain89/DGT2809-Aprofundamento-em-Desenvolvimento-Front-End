
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ControleLivrosService } from './controle-livros';
import { ControleEditoraService } from './controle-editora';

@NgModule({
  declarations: [

  ],
  imports: [
 BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent
  ],
  providers: [    ControleEditoraService,
    ControleLivrosService],
  bootstrap: []
})
export class AppModule { }
