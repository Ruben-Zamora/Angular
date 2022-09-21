import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  pokemons: any[]= [];
  pokemonsFiltered: any[]=[];
  constructor(private pokeApi: ApiService) { }

  ngOnInit(): void {
    this.pokeApi.GetPokemonList().subscribe((pokemonList: any)=>{
      console.log(pokemonList);
      this.pokemons=pokemonList;
      this.pokemonsFiltered=pokemonList;
    })
  }

  filterPokemons(pokemonFilterName: string){
    this.pokemonsFiltered=this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonFilterName.toLocaleLowerCase()));
  }

}
