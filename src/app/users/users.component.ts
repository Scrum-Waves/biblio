import { Router } from '@angular/router';
import { Role } from './../models/role.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import bootstrap from '../../main.server';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  
  You !: string[]; //un tableau de chaines de caractères
  users !: User[]; //un tableau de User
  roles !: Role[]; //un tableau de Role

  newUser = new User();


  constructor(private authService : AuthService,
              private router : Router) {
    
    /*//this.users = authService.listeUsers();
    //this.roles = authService.listeRoles();*/

    

  }

  ngOnInit(): void {
    this.authService.listeRoles().subscribe(rols => {
      console.log(rols);
      this.roles = rols;
    });
    this.authService.listeUsers().subscribe(usrs => {
      console.log(usrs);
      this.users = usrs;
    });
  }




  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  supprimerUser(us : User){
    /*let conf = confirm("Etes-vous sûr ?");
    if (conf)*/
      this.authService.supprimerUser(us.iduser).subscribe(() => {
        console.log("user supprimé");

        this.SuprimerUserDuTableau(us);
        /*this.router.navigate(['/users']).then(() => {
          window.location.reload();
        });*/

      });
  }



  /*supprimerUser( usr: User){
    //supprimer le produit prod du tableau produits
    const index = this.users.indexOf(usr, 0);
    if (index > -1) {
    this.users.splice(index, 1);
    }*/
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    //}

  SuprimerUserDuTableau(usr : User) {
    this.users.forEach((cur, index) => {
    if(usr.iduser=== cur.iduser) {
    this.users.splice(index, 1);
    }
    });
    }

}
