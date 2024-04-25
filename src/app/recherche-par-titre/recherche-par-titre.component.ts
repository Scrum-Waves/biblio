import { LivreService } from './../services/livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from './../models/livre.model';
import { Genre } from './../models/genre.model';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-recherche-par-titre',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './recherche-par-titre.component.html',
  styleUrl: './recherche-par-titre.component.css'
})
export class RechercheParTitreComponent implements OnInit {



  //livresRecherche : Livre[];
  livres !: Livre[];
  genres !: Genre[];
  ch !: string;

  constructor(private livreService : LivreService
              //,public authService: AuthService
              /*,private router: Router*/) { }

  ngOnInit(): void {
                    //this.livres = this.livreService.listeLivres();
                  this.livres = [];
  }


  /*onChange() {
  //console.log(this.idGenre);
  this.livres = this.livreService.rechercherParTitre(this.ch);
  }*/

  //API REST
  onChange() {
    //console.log(this.idGenre);
    this.livreService.rechercherParTitre(this.ch).subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
    } 
  
}
