import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../models/livre.model';
import { Genre } from '../models/genre.model';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-livre',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-livre.component.html',
  styleUrl: './update-livre.component.css'
})
export class UpdateLivreComponent implements OnInit {

    //currentLivre ?= new Livre();
    currentLivre !: Livre ;

    //Genre
    genres !: Genre[];
    updatedGenre !: Genre;
  
    constructor(private activatedRoute: ActivatedRoute,
                private router : Router,
                private livreService: LivreService) { this.currentLivre != new Livre(); }
  
    ngOnInit()/*: void*/ {
      //Genre
          //old local
      /*this.genres = this.livreService.listeGenres();*/
      //API rest subscribe GENRE
      this.livreService.listeGenres().subscribe(gens => {
        console.log(gens);
        this.genres = gens;
        });
  
      //service
      //console.log(this.route.snapshot.params.id);
      /*this.currentLivre = this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id'])!;
      console.log(this.currentLivre);*/
      //API REST
      this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
      subscribe( liv =>{ this.currentLivre = liv; } ) ;
  
  
    }
  
  
    updateLivre()
    { 
      //Genre
      //this.updatedGenre = this.livreService.consulterGenre(this.currentLivre.genre.idGen);
      //this.currentLivre.genre = this.updatedGenre;
  
      
      //console.log(this.currentLivre);
    /*this.livreService.updateLivre(this.currentLivre);
    this.router.navigate(['livres']);*/
    //API REST
    this.livreService.updateLivre(this.currentLivre).subscribe(liv => {
      this.router.navigate(['livres']).then(() => {
        window.location.reload();
      });;
      },(error) => { alert("Problème lors de la modification !"); }
      );
    }

}
