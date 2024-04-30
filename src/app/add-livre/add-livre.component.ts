import { Component, OnInit } from '@angular/core';

// model
import { Genre } from '../models/genre.model';
import { Livre } from '../models/livre.model';

//
import { Router } from '@angular/router';

//service
import { LivreService } from '../services/livre.service';
import { throwError } from 'rxjs';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-livre',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-livre.component.html',
  styleUrl: './add-livre.component.css'
})
export class AddLivreComponent implements OnInit {

  
  //Data Binding From VIEW To MODULE
  newLivre = new Livre();
  message !: string;

  //Genre
  genres !: Genre[];

  newIdGen !: number;
  newGenre !: Genre;
  //newGenre = new Genre();

  constructor( private livreService: LivreService,
                private router: Router) { }

  ngOnInit(): void { 
    //Genre
      //old local
    /*this.genres = this.livreService.listeGenres();*/
    //API rest subscribe LIVRE
    this.livreService.listeGenres().subscribe(gens => {
      console.log(gens);
      this.genres = gens;
      });
   }



   changeID(){
    this.livreService.consulterGenre(this.newIdGen).subscribe( gen =>{ this.newGenre = gen; console.log("test3 gen: this.newGenre"); console.log(gen); } ) ;

   }



   /*

   addProduit(){
      this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
      this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
      console.log(prod);
      this.router.navigate(['produits']);
      });
    }

   */

  //Data Binding From VIEW To MODULE
  addLivre(){
    console.log("test1 : this.newLivre");
    console.log(this.newLivre);
    //service
    ////////this.newGenre = new Genre();
    //Genre
    //ngModel Two Way Data Binding
    ////console.log("test2 id: this.newIdGen");
    ////console.log(this.newIdGen)
    //this.newGenre != this.livreService.consulterGenre(this.newIdGen);
    /////////////////////this.livreService.consulterGenre(this.newIdGen).subscribe( gen =>{ this.newGenre = gen; console.log("test3 gen: this.newGenre"); console.log(gen); } ) ;
    console.log("test4 genre: this.newGenre");
    console.log(this.newGenre);
    this.newLivre.genre = this.newGenre;
    console.log("test pre-finale : this.newLivre.genre");
    console.log(this.newLivre.genre);

    console.log("test finale : this.newLivre");
    console.log(this.newLivre);

    //this.newLivre.genre = this.newGenre;
    ////////console.log("test5 genre: this.newLivre.genre");
    ////////console.log(this.newLivre.genre);
    this.livreService.ajouterLivre(this.newLivre).subscribe(liv => {
      console.log("test5 liv");
      console.log(liv);
    });
    this.message = "Livre " + this.newLivre.titreLivre + "ajoute avec success"
    
    //Ou bien
    // reload   .then(() => { window.location.reload(); })
    this.router.navigate(['livres']).then(() => {
      window.location.reload();
    });
  
  }

}
