import { Injectable } from '@angular/core';

//Paths
import { apiURLconst, apiURLconst2, apiURLconst3 } from './../app.config';

//model
import { Livre } from '../models/livre.model';
import { Genre } from '../models/genre.model';

//API REST
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//API REST
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
  providedIn: 'root'
})
export class LivreService {


  
  apiURLtest : string = apiURLconst;
  //API REST Livre
  //apiURL: string = 'http://localhost:9999/books/api';
  //apiURL: string = 'http://localhost:9999/books/api';
  apiURL: string = apiURLconst2;
  //API REST Genre
  //apiURL1: string = 'http://localhost:9999/books/apig';
  //apiURL1: string = 'http://localhost:9999/books/apig';
  apiURL1: string = apiURLconst3;

  livres !: Livre[]; //un tableau de Livres
  livre !: Livre | undefined;
  
  genre !: Genre | undefined;

  //genres !: Genre[]; //un tableau de Genre

  constructor( /*API REST*/private http : HttpClient ) {

    /*this.genres = [ 
          {idGen : 1, nomGen : "Auto-assistance", descriptionGen : "dg"},
          {idGen : 2, nomGen : "Fantasy" , descriptionGen : "fj"}
    ]*/


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
  }



  //service
  /*listeGenres() : Genre[] {
    return this.genres;
  }*/
  //API REST
  listeGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.apiURL1);
    }

  /*
    listeGenres(): Observable<Genre[]>{
  return this.http.get<Genre[]>(this.apiURL1);
  }
  */

  //service
  /*listeLivres() : Livre[] {
   return this.livres;
  }*/
  //API REST
  listeLivres(): Observable<Livre[]>{
   return this.http.get<Livre[]>(this.apiURL);
  }
  /*
    listeLivres(): Observable<Livre[]>{
   return this.http.get<Livre[]>(this.apiURL);
  }
  */



  ajouterGenre(gen : Genre): Observable<Genre>{

    return this.http.post<Genre>(this.apiURL1, gen);
    }

    /*
      ajouterGenre(gen : Genre): Observable<Genre>{
    return this.http.post<Genre>(this.apiURL1, gen, httpOptions);
    }
    */

  //service
  /*ajouterLivre ( liv: Livre){
   this.livres.push(liv);
  }*/
  //API REST
  ajouterLivre( liv: Livre ):Observable<Livre>{

   return this.http.post<Livre>(this.apiURL, liv);
  }


  


  //API REST
  supprimerGenre(id : number) {
    const url = `${this.apiURL1}/${id}`;

    return this.http.delete(url);
  }
 

  //service
  /*supprimerLivre( liv: Livre){
  //supprimer le produit prod du tableau produits
  const index = this.livres.indexOf(liv, 0);
  if (index > -1) {
  this.livres.splice(index, 1);
  }
  //ou Bien
  // this.produits.forEach((cur, index) => {
  //if(prod.idProduit === cur.idProduit) {
  //this.produits.splice(index, 1);
  //}
  //}); 
  //}*/
  //API REST
  supprimerLivre(id : number) {
    const url = `${this.apiURL}/${id}`;

    return this.http.delete(url);
  }




      
       


  /*consulterGenre(id:number): Genre | undefined{
  //Genre
  this.genre = new Genre();
  console.log("consulter gen.idGen :")
  console.log(id)
  this.genre = this.genres.find(gen => gen.idGen == id);
  return this.genre ;
  }*/
  //API REST
  consulterGenre(id: number): Observable<Genre> {
    const url = `${this.apiURL1}/${id}`;

    return this.http.get<Genre>(url);
  }

  

  //service
  /*consulterLivre(id:number): Livre | undefined{
  this.livre = this.livres.find(p => p.idLivre == id);
  return this.livre ;
  }*/
  //API REST
  consulterLivre(id: number): Observable<Livre> {
    const url = `${this.apiURL}/${id}`;

    return this.http.get<Livre>(url);
    }







  trierLivres(){
    this.livres = this.livres.sort((n1,n2) => {
    if (n1.idLivre > n2.idLivre) {
    return 1;
    }
    if (n1.idLivre < n2.idLivre) {
    return -1;
    }
    return 0;
    });
  }






  //service
  /*updateLivre(livr:Livre)
  {
  // console.log(livr);
  
  //livr.idLivre;
  this.supprimerLivre(livr );
  this.ajouterLivre(livr);
  this.trierLivres();
  }*/
  //API REST
  updateLivre(liv :Livre) : Observable<Livre>
  {

  return this.http.put<Livre>(this.apiURL, liv);
  }










  livresRecherche !: Livre[]; //Rechercher

  // Rechercher par gendre
  /*rechercherParGenre(idGen: number): Livre[]{
    this.livresRecherche = [];

    this.livres.forEach((cur, index) => {
    if ( idGen == cur.genre.idGen ) {
        console.log("cur "+cur);
        this.livresRecherche.push(cur);
        }
    });
    return this.livresRecherche; 
  }*/
  


  //API REST
  livsgen: string = 'livsgen';
  rechercherParGenre(idGen: number): Observable<Livre[]>{
    this.livresRecherche = [];
    const url = `${this.apiURL}/${this.livsgen}/${idGen}`;

    
    return this.http.get<Livre[]>(url);

  }



///////////////////////////////////////////////////////////////////////
  livresRechercheTitre !: Livre[]; //Rechercher Titre
  // Rechercher par titre
  /*rechercherParTitre(ch: string): Livre[]{
    this.livresRechercheTitre = [];

    this.livres.forEach((cur, index) => {
    if ( //cur.titreLivre.includes(ch)
      cur.titreLivre.toUpperCase().includes(ch.toUpperCase()) 
      //ch == cur.titreLivre 
      ) {
        console.log("cur "+cur);
        this.livresRechercheTitre.push(cur);
        }
    });
    return this.livresRechercheTitre; 
  }*/

  //API REST
  livstitre: string = 'livstitre';
  
  rechercherParTitre(ch: string): Observable<Livre[]>{
    this.livresRechercheTitre = [];

    const url = `${this.apiURL}/${this.livstitre}/${ch}`;





    return this.http.get<Livre[]>(url);
  }

  ///////////////////////////////////////////////////////////////////////
  livresRechercheAuteur !: Livre[]; //Rechercher Nom
  // Rechercher par Nom


  //API REST
  livsauteur: string = 'livsauteur';
  
  rechercherParNom(ch: string): Observable<Livre[]>{
    this.livresRechercheAuteur = [];

    const url = `${this.apiURL}/${this.livsauteur}/${ch}`;



    return this.http.get<Livre[]>(url);
  }
}
