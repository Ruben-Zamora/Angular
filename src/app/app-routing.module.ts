import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [
  {path: 'Home', component: PokemonsListComponent},
  {path: 'Pokemon/:name', component: PokemonDetailsComponent},
  {path: 'Items', component: ItemsListComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
