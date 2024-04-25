import { Component, OnInit } from '@angular/core';

//model
import { Livre } from '../models/livre.model';

//service
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

import { RouterOutlet } from '@angular/router';

import { RouterModule } from '@angular/router';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent implements OnInit {

  
  //livres !: string[]; //un tableau de chînes de caractères

  livres !: Livre[];
  constructor( private livreService : LivreService, private router: Router) { 
    //this.livres = ["PC Asus", "Imprimante Epson", "Tablette Samsung"]; 
  
    /*this.livres = [
      {
        idLivre : 1, 
        isbnLivre : 9788423991815,
        titreLivre : "The 48 Laws of Power ",
        auteurLivre : "Robert Greene",
        prixLivre : 26*3,
        datePublication : new Date("12/17/1998"),
        Genre : { idGen : 1, nomGen : "Science", descriptionGen : "good" }
      },
      {
        idLivre : 2, 
        isbnLivre : 1439167346,
        titreLivre : "How to win friends and influence people ",
        auteurLivre : "Dale Carnegie",
        prixLivre : (8.02) *3,
        datePublication : new Date("10/11/1937"),
        Genre : { idGen : 2, nomGen : "War", descriptionGen : "Excellent" }
      }
      ];*/
      //Data Binding
      //this.livres = livreService.listeLivres();
  }

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




    //Supprimer
  /*supprimerLivre(li: Livre)
  {
  console.log(li);
  //this.livreService.supprimerLivre(li);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.livreService.supprimerLivre(li);
  console.log("livre supprimé");
  }*/

  //API REST
  supprimerLivre(li: Livre) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.livreService.supprimerLivre(li.idLivre).subscribe(() => {
        console.log("livre supprimé");
        this.SuprimerLivreDuTableau(li);
      });
      /*this.router.navigate(['livres']).then(() => {
      window.location.reload();
      });*/
  }

  SuprimerLivreDuTableau(prod: Livre) {
    this.livres.forEach((cur, index) => {
      if (prod.idLivre === cur.idLivre) {
        this.livres.splice(index, 1);
      }
    });
  }


}
