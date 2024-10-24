import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { ItemListComponent } from './components/item-list/item-list.component';
=======
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
>>>>>>> 3f90f10d6b28d162d9cabd14f343245daadc3a2d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ItemListComponent
=======
    PokemonListComponent
>>>>>>> 3f90f10d6b28d162d9cabd14f343245daadc3a2d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
<<<<<<< HEAD
  providers: [provideHttpClient()],
=======
>>>>>>> 3f90f10d6b28d162d9cabd14f343245daadc3a2d
  bootstrap: [AppComponent]
})
export class AppModule { }
