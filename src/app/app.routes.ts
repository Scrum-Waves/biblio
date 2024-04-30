import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { LoginComponent } from './login/login.component';

import { livreGuard } from './livre.guard';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { adminGuard } from './admin.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [

    //Path
    //{ path: "", redirectTo: "home", pathMatch: "full" },
    { path: "", redirectTo: "livres", pathMatch: "full" },

    {
        path: 'home',
        component: HomeComponent,
        /*children: [
            { path: "", redirectTo: "test", pathMatch: "full" },
            { path: 'test', component: OpenCloseComponent },
      
      
          ]*/
      },

    {path: 'login', component: SignInComponent/*LoginComponent*/},
    {path: 'logout', component: SignOutComponent},
    {path: 'signup', component: SignUpComponent},

    //API REST
    {path: "users", component : UsersComponent },
    {path: "add-user", component : AddUserComponent },
    {path: "update-user/:id", component : UpdateUserComponent },
  
    //Forbidden non Admin
    {path: 'app-forbidden', component: ForbiddenComponent},




    {path: "livres", component : LivresComponent},
    {path: "add-livre", component : AddLivreComponent},
    {path: "updateLivre/:id", component: UpdateLivreComponent},

    //Search
    {path: "rechercheParGenre", component : RechercheParGenreComponent},
    {path: "rechercheParTitre", component : RechercheParTitreComponent},
    {path: "rechercheParNom", component : RechercheParNomComponent},

    //API REST
    {path: "genres", component : ListeGenresComponent},



    //Othterwise redirect to livres
    //{ path: "*", redirectTo: "livres"}
    //Othterwise redirect to PageNotFound
    { path: "**" , component:PageNotFoundComponent }
];
