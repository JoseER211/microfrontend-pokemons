import { Component } from '@angular/core';
import { PokemonService } from './pokemon-service.service';
@Component({
  selector: 'mf-footer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'footer';

  urlImage!: string
  listaPersonajes!: any
  listaUrlPersonajes: any[] = [];
  pokemones: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.agregarUrl();
  }

  agregarUrl() {
    this.pokemonService.getUrlPersonajes().subscribe((data: any) => {
      this.listaPersonajes = data.results
      this.listaPersonajes.map((personaje: any) => {
        /* console.log(personaje.url) */
        this.listaUrlPersonajes.push(personaje.url)

      })

    })
  }

  buscarPersonajes() {
    this.listaUrlPersonajes.map((urlPersonaje: any) => {
      this.pokemonService.getPersonajes(urlPersonaje).subscribe((data: any) => {
        this.pokemones.push(data)
        console.log(this.pokemones)
      })
    })
  }
}
