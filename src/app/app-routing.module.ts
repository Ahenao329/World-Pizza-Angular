import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { IngredientesComponent } from './pages/ingredientes/ingredientes.component';

const routes: Routes = [
  {path: '', component: ProductosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'ingredientes', component: IngredientesComponent},
  {path: 'contactanos', component: ContactoComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
