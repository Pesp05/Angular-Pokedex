export interface PokemonDetailResponse {
    game_indices: Index[]
    id: number
    name: string
    order: number
    types: Type[]
    weight: number
  }
  
  export interface Index {
    game_index: number
    version: Version
  }
  
  export interface Version {
    name: string
    url: string
  }
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  export interface Type2 {
    name: string
    url: string
  }
  