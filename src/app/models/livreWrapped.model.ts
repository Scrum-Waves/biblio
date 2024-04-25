import { Livre } from './livre.model';

export class LivreWrapper{
_embedded!: { livres: Livre[]};
}