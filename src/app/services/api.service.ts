import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { PokemonDetails } from '../models/pokemon-details.model';
import { ItemDetails } from '../models/item-details.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  pokeUrl= 'https://pokeapi.co/api/v2/'
  itemUrl= 'https://pokeapi.co/api/v2/item/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*/*',
    })
  }
  constructor(private http: HttpClient) { }

  GetPokemonList(): any{
    return this.http.get<any>(this.pokeUrl+'pokemon/?limit=151',this.httpOptions).pipe(
      map((data:any)=>data.results),retry(1)
    )
  }
  GetPokemonByName(name: string): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(`${this.pokeUrl}pokemon/${name}`,this.httpOptions).pipe(
      map((data:any)=>data),retry(1)
    )
  }

  GetItemList(): any{
    return this.http.get<any>(this.itemUrl+'?limit=151',this.httpOptions).pipe(
      map((data:any)=>data.results),retry(1)
    )
  }

  GetItemByName(name: string): Observable<ItemDetails>{
    return this.http.get<ItemDetails>(`${this.itemUrl}${name}`,this.httpOptions).pipe(
      map((data:any)=>data),retry(1)
    )
  }
  
}
