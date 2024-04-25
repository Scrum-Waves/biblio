import { Component, OnInit } from '@angular/core';

import { Genre } from '../models/genre.model';
import { LivreService } from './../services/livre.service';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UpdateGenreComponent } from '../update-genre/update-genre.component';

@Component({
  selector: 'app-liste-genres',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UpdateGenreComponent ],
  templateUrl: './liste-genres.component.html',
  styleUrl: './liste-genres.component.css'
})
export class ListeGenresComponent implements OnInit {

  genres! : Genre[];
  gen! : Genre;

  updatedGen:Genre = {"idGen":0,"nomGen":"", "descriptionGen":""};

  ajout:boolean=true;
  

  constructor(private livreService : LivreService ) { }

  ngOnInit(): void {
      this.livreService.listeGenres().
      subscribe(gens => {this.genres = gens;
      console.log(gens);
      });
    
    this.chargerGenres();
  }

  //API rest subscribe LIVRE
  chargerGenres(){
    //API rest subscribe LIVRE
    this.livreService.listeGenres().subscribe(gens => {
      //console.log(gens);
      this.genres = gens;
      });
  }


  genreUpdated(cat:Genre){
    //console.log("Cat updated event",cat);
    this.livreService.ajouterGenre(cat).
     subscribe( ()=> this.chargerGenres());
    }


    updateGen(gen:Genre) {
      this.updatedGen =gen;
      this.ajout=false;
      }
    
  /*genreDelete(gen : Genre){
    let conf = confirm("Etes-vous sûr ?");
      if (conf)
    this.livreService.supprimerGenre(gen.idGen);
  }*/



    //API REST
    genreDelete(gen: Genre) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.livreService.supprimerGenre(gen.idGen).subscribe(() => {
          console.log("Genre supprimé");
          this.SuprimerGenreDuTableau(gen);
        });
        /*this.router.navigate(['livres']).then(() => {
        window.location.reload();
        });*/
    }
  
    SuprimerGenreDuTableau(gen: Genre) {
      this.genres.forEach((cur, index) => {
        if (gen.idGen === cur.idGen) {
          this.genres.splice(index, 1);
        }
      });
    }

}
