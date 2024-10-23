import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon';
import { PokemonDetailResponse } from '../models/pokemon-detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient){}
  
  getPokemonList():Observable<PokemonListResponse>{
   return this.http.get<PokemonListResponse>(this.apiUrl);
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2]; 
  }

  getPokemonImage(url:string):string{
    const id = this.getPokemonId(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  getPokemonDetail(id:string):Observable<PokemonDetailResponse>{
    return this.http.get<PokemonDetailResponse>(`${this.apiUrl}${id}`);
  }
}
