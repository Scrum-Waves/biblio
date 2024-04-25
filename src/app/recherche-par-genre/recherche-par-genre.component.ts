import { Genre } from './../models/genre.model';
import { Livre } from './../models/livre.model';
import { Component, OnInit } from '@angular/core';
import { LivreService } from '../services/livre.service';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-genre',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './recherche-par-genre.component.html',
  styleUrl: './recherche-par-genre.component.css'
})
export class RechercheParGenreComponent implements OnInit  {

  
  //livresRecherche !: Livre[];
  livres !: Livre[];
  genres !: Genre[];
  idGenre !: number;

  constructor(private livreService: LivreService,
              //public authService: AuthService
              /*,private router: Router*/) { }

  ngOnInit(): void {
                      this.livres = [];
                      //this.livres = this.livreService.listeLivres();
                      //Genre
                      //old local
                      /*this.genres = this.livreService.listeGenres();*/
                      //API rest subscribe GENRE
                      this.livreService.listeGenres().subscribe(gens => {
                        console.log(gens);
                        this.genres = gens;
                      });
                    }

  onChange() {
    //console.log(this.idGenre);
    this.livreService.rechercherParGenre(this.idGenre).subscribe(livs => {
      console.log(livs);
      this.livres = livs;
    });
  }

}
