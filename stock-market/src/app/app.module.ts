import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosUsuarioComponent } from './pedidos/datos-usuario/datos-usuario.component';
import { ButtonsMainComponent } from './pedidos/buttons-main/buttons-main.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosUsuarioComponent,
    ButtonsMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
