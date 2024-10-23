import { Component, OnInit } from '@angular/core';
import { PokemonDetailResponse } from '../../models/pokemon-detail';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/item';
import { ActivatedRoute } from '@angular/router';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit{

  pokemon!:PokemonDetailResponse; //Al no estar inicializada se pone exclamación por si no hubiera

  constructor(private route:ActivatedRoute ,private pokemonService:PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((detalles) =>{
     let id = this.pokemonService.getPokemonId(this.pokemonService.getPokemonList());
    })
  }

  
}
