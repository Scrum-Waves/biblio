import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LivresComponent } from '../livres/livres.component';
import { ListeGenresComponent } from '../liste-genres/liste-genres.component';

import { ForbiddenComponent } from '../forbidden/forbidden.component';

import { AddLivreComponent } from '../add-livre/add-livre.component';
import { RechercheParGenreComponent } from './../recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from '../recherche-par-nom/recherche-par-nom.component';
import { RechercheParTitreComponent } from '../recherche-par-titre/recherche-par-titre.component';
import { Livre } from '../models/livre.model';

import { LivreComponent } from '../livre/livre.component';
import { NgFor } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LivreComponent, NgFor, RouterOutlet, HeaderComponent, LivresComponent, ListeGenresComponent, ForbiddenComponent, AddLivreComponent, RechercheParGenreComponent, RechercheParNomComponent, RechercheParTitreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  livres !: Livre[];


  constructor(private livreService : LivreService, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    //API rest subscribe LIVRE
    this.chargerLivres();
    
  }


    //API rest subscribe LIVRE
    chargerLivres(){
      //API rest subscribe LIVRE
      this.livreService.listeLivres().subscribe(livs => {
        console.log(livs);
        this.livres = livs;
        });
}

}
