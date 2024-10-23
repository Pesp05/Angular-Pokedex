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
  
    
  
  }
