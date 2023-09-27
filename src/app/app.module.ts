import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeAlumnosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
