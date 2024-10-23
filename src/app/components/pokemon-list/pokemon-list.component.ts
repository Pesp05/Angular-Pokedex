import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/item';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{

  listaPokemon :Pokemon [] = [];
  
  constructor(private pokemonService:PokemonService){}
  
    ngOnInit(): void {
     this.pokemonService.getPokemonList().subscribe((respuesta) =>{
      this.listaPokemon = respuesta.results;
     });
    }
  
    getPokemonId(url: string): string {
      const parts = url.split('/');
      return parts[parts.length - 2]; 
    }
  
    getPokemonImage(url:string):string{
      const id = this.getPokemonId(url);
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }
  
  }
