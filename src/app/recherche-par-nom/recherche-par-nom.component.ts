import { LivreService } from './../services/livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from './../models/livre.model';
import { Genre } from './../models/genre.model';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent implements OnInit {

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



  //API REST
  onChange() {
    //console.log(this.idGenre);
    this.livreService.rechercherParNom(this.ch).subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
    } 


}
