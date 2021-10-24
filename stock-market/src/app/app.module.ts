import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosUsuarioComponent } from './pedidos/datos-usuario/datos-usuario.component';
import { ButtonsMainComponent } from './pedidos/buttons-main/buttons-main.component';
import { ListadoPedidosGComponent } from './pedidos/listado-pedidos-g/listado-pedidos-g.component';
import { ModalModule } from './pedidos/modal';
import { ReusableTableComponent } from './pedidos/reusable-table/reusable-table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DatosUsuarioComponent,
    ButtonsMainComponent,
    ListadoPedidosGComponent,
    ReusableTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
