import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withFetch())]
};


export const apiURLconst: string = "http://localhost:9999/";



export const apiURLconst2: string = "http://localhost:9999/books/api";

export const apiURLconst3: string = "http://localhost:9999/books/apig";



export const apiURLconstuser: string = "http://localhost:9999/books/";