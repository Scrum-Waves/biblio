import { Injectable, OnInit } from '@angular/core';

//Path
import { apiURLconstuser } from '../app.config';



//Route
import { Router } from '@angular/router';
//Models
import { Role } from '../models/role.model';
import { User } from '../models/user.model';

//API REST
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


// Important to know API REST
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  //API REST
  //apiURL: string = 'http://localhost:8085/userBackEnd/api/all';
  apiURL: string = apiURLconstuser+'user/all';
  //apiURL1: string = 'http://localhost:8085/userBackEnd/role';
  apiURL1: string = apiURLconstuser+'role';
  //add user //Post //Delete
  //apiURL2: string = 'http://localhost:8085/userBackEnd/api/';
  apiURL2: string = apiURLconstuser+'user/';
  //get user   //GET by email
  //apiURL3: string = 'http://localhost:8085/userBackEnd/api/logino';
  apiURL3: string = apiURLconstuser+'user/logino';

  apiURL4: string = apiURLconstuser+'user/login';



  /*class User
    iduser !: number;
    username !: string ;
    email !: string ;
    password !: string;
    enabled !: boolean;
    role !: Role;
  */

  //Local Users Data 
  public You !: string[]; //un tableau de chaines de caractères
  users !: User[]; //un tableau de User
  roles !: Role[]; //un tableau de Role








  constructor(private router: Router, /*API REST*/private http : HttpClient ) {
    this.roles = [];
    this.users = [];
   }
   
   public loggedUser !: string;
  public isloggedIn: Boolean = false;
  public AdminOrUser !: string;
  ngOnInit(): void {
          /*let isloggedin : string | null;
      let loggedUser : string | null;
      let AdminOrUser : string | null;
      isloggedin = localStorage.getItem('isloggedIn');
      loggedUser = localStorage.getItem('loggedUser');
      AdminOrUser = localStorage.getItem('AdminOrUser');*/
      //if (isloggedin!="true" || !loggedUser || !AdminOrUser )
      //this.router.navigate(['/login']);
      //else
      //this.authService.setLoggedUserFromLocalStorage(loggedUser , AdminOrUser);
    
    
    
    //console.log(this.authService.loggedUser+ localStorage.getItem("loggedUser"));
    
    /*const storedUser = localStorage.getItem("loggedUser");*/
    /*this.loggedUser = typeof storedUser === "string" ? storedUser : "";*/
    //this.loggedUser = localStorage.getItem("loggedUser") || "";

    if (typeof localStorage !== 'undefined') {
      var storedValue = localStorage.getItem("loggedUser");
      if (typeof storedValue === "string") {
        this.loggedUser = storedValue;
      } else {
        this.loggedUser = "";
      }
    } else {
      // Handle the case where localStorage is not available
      this.loggedUser = ""; // or any other fallback value
    }



    //this.isloggedIn = localStorage.getItem("isLoggedIn") !== null ? true : false;
    if (typeof localStorage !== 'undefined') {
      this.isloggedIn = localStorage.getItem("isLoggedIn") === "true";
    } else {
      // Handle the case where localStorage is not available
      // For example, you might set isloggedIn to a default value
      this.isloggedIn = false;
    }



    //this.AdminOrUser = localStorage.getItem("AdminOrUser") || "";
    if (typeof localStorage !== 'undefined') {
      var storedValue = localStorage.getItem("AdminOrUser");
      if (typeof storedValue === "string") {
        this.AdminOrUser = storedValue;
      } else {
        this.AdminOrUser = "";
      }
    } else {
      // Handle the case where localStorage is not available
      this.AdminOrUser = ""; // or any other fallback value
    }
  }

   /////////////////////////////////////////////////////////////////////////////////




   login(user : User)
   {
   return this.http.post<User>(this.apiURL4, user , {observe:'response'});
   }







  //API REST

  listeUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  /*listeUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }*/


  listeRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiURL1);
  }

  /*listeRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiURL1);
  }*/

  ajouterUser(usr: User): Observable<User> {
    return this.http.post<User>(this.apiURL2.slice(0, this.apiURL2.length - 1), usr);
  }

  /*
    ajouterUser(usr: User): Observable<User> {
    return this.http.post<User>(this.apiURL2, usr, httpOptions);
  }
  */

  consulterRole(id: number): Observable<Role> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.get<Role>(url);
  }

  /*
  consulterRole(id: number): Observable<Role> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.get<Role>(url);
  }
  */


/////////////////////////////////////////////////////////////////////////////////////////



  role = new Role();

  user !: User;


  //Spring Boot
  
  getUserFromDB(email: string): Observable<User> {
    const urll = `${this.apiURL3}/${email}`;
    return this.http.get<User>(urll);
  }


  /*getUserFromDB(email: string): Observable<User> {
    const urll = `${this.apiURL3}/${email}`;
    return this.http.get<User>(urll);
  }*/


//////////////////////////////////////////////////////////////////////////////////////////

supprimerUser(id: number) {
  const url = `${this.apiURL2}${id}`;
  return this.http.delete(url);
}

/*supprimerUser(id: number) {
  const url = `${this.apiURL2}/${id}`;
  return this.http.delete(url, httpOptions);
}*/


//////////////////////////////////////////////////////////////////////////////////////////

consulterUser(id: number): Observable<User> {
  const url = `${this.apiURL2}${id}`;
  return this.http.get<User>(url);
}

  /*consulterUser(id: number): Observable<User> {
    const url = `${this.apiURL2}/${id}`;
    return this.http.get<User>(url);
  }*/


  
   //http://localhost:9999/books/user/me/speed@gmail.com

      consulterUserByEmail(email: string): Observable<User> {
        const url = `${this.apiURL2}me/${email}`;
        console.log(this.http.get<User>(url));
        return this.http.get<User>(url);
      }


  updateUser(usr: User): Observable<User> {
    return this.http.put<User>(this.apiURL2.slice(0, this.apiURL2.length - 1), usr);
  }


  /*updateUser(usr: User): Observable<User> {
    return this.http.put<User>(this.apiURL2, usr, httpOptions);
  }*/

//////////////////////////////////////////////////////////////////////////////////////////


  //login
  /*SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
    if(user.email === curUser.email && user.password==curUser.password) {
    validUser = true;
    this.loggedUser = curUser.username;
    this.isloggedIn = true;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
    });
    return validUser;
    }*/
  SignIn(user: User) {
    this.loggedUser = user.username;
    this.isloggedIn = true;
    this.AdminOrUser = String(user.role.nomRole);
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    localStorage.setItem('AdminOrUser', String(user.role.nomRole));
    /*let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;*/
  }
  
  
  
  
  
  logout() {
    this.isloggedIn = false;
    this.loggedUser = "";
    this.loggedUser != undefined;
    //this.loggedUser = undefined!;
    this.AdminOrUser = "";
    this.AdminOrUser != undefined;
    //this.AdminOrUser = undefined!;
  
  
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('AdminOrUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));


  
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });;
  }
  
  
  isAdmin(): Boolean {
    if (!this.loggedUser) //this.loggedUser == undefiened
      return false;
    return true;//(this.loggedUser.indexOf('A') >-1) ;
    ;
    
    /*this.roles.forEach((curRole) => {
      if (curRole.role == 'ADMIN') {
           admin = true;
      }
    });
    return admin;*/
    /*if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
    ;*/
  }
  
  
  setLoggedUserFromLocalStorage(login: string, rol: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.AdminOrUser = rol;
    /*this.getUserRoles(login);*/
  }

  /*getUserRoles(username: string) {
    this.getUserFromDB(username).subscribe((user: User) => {
      this.roles = user.roles;
    });*/
    /*this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });*/
  /*}*/
  
  
  
  isAdminVIP(): Boolean {
    let adminVIP: boolean = false;
    if (!this.AdminOrUser) { return false; }
    if (this.AdminOrUser == "Admin") { adminVIP = true; }
    return adminVIP;
  }



}






//Si je veux ajouter des autre role hors User & Admin
//Je doit utiliser this.roles = [],AdminOrUser

//methode logout
//his.roles = undefined!;


//Tester isAdminVIP changer "Admin" avec autre que ça
//isAdmin():Boolean{
//  if (!this.roles) //this.roles== undefiened
//  return false;
//  return (this.roles.indexOf('ADMIN') >-1);
//  }