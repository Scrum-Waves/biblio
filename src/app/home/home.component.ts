import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LivresComponent } from '../livres/livres.component';
import { ListeGenresComponent } from '../liste-genres/liste-genres.component';

import { ForbiddenComponent } from '../forbidden/forbidden.component';

import { AddLivreComponent } from '../add-livre/add-livre.component';
import { RechercheParGenreComponent } from './../recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from '../recherche-par-nom/recherche-par-nom.component';
import { RechercheParTitreComponent } from '../recherche-par-titre/recherche-par-titre.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LivresComponent, ListeGenresComponent, ForbiddenComponent, AddLivreComponent, RechercheParGenreComponent, RechercheParNomComponent, RechercheParTitreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
