import { Component, OnInit } from '@angular/core';

//model
import { Livre } from '../models/livre.model';

//service
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

import { RouterOutlet } from '@angular/router';

import { RouterModule } from '@angular/router';


import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit,  ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { ImageSliderComponent } from '../image-slider/image-slider.component';



@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterModule, NgIf, RouterOutlet, MdbCarouselModule, CommonModule, FormsModule, ReactiveFormsModule, ImageSliderComponent, MatSlideToggleModule, NgbCarouselModule],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent implements OnInit {

  
  //livres !: string[]; //un tableau de chînes de caractères

  livres !: Livre[];
  constructor( private livreService : LivreService, private router: Router, public authService: AuthService) { 
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


  
  slides: any[] = [];

  images = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522book%2Bbackground%2522&psig=AOvVaw0ScJCELVWnBBcrzRheKR0B&ust=1714175002523000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwioq5HSxd6FAxVl3bsIHTaeBcIQjRx6BAgAEBY",
   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fbook.html&psig=AOvVaw0x-gaLsUY2ge7NX61XxQ4z&ust=1714175083438000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjs-9v4xd6FAxU1qv0HHb8vA1YQjRx6BAgAEBY", 
   "https://static.vecteezy.com/system/resources/previews/041/425/724/non_2x/ai-generated-a-book-with-open-pages-flying-in-the-air-surrounded-by-other-books-photo.jpg"];
  
  onSlideChange(): void {
    console.log('slide change');
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
