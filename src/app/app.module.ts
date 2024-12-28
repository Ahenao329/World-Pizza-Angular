import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FootrerComponent } from './shared/footrer/footrer.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { IngredientesComponent } from './pages/ingredientes/ingredientes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BntTopComponent } from './shared/bnt-top/bnt-top.component';
import { AlertComponent } from './shared/alert/alert.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootrerComponent,
    ProductosComponent,
    ServiciosComponent,
    EquipoComponent,
    IngredientesComponent,
    ContactoComponent,
    BntTopComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
