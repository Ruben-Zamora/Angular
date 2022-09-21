import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from '../models/pokemon-details.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  load: boolean=false;
  pokemonDetails!: PokemonDetails;
  @Input('pokemon') pokemonName: string='';

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.GetPokemonByName(this.pokemonName).subscribe((result)=>{
      this.pokemonDetails=result;
      this.load=true;
    })
  }

}
