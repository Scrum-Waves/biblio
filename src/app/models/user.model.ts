import { Role } from './role.model';
export class User{
    iduser !: number;
    username !: string ;
    email !: string ;
    password !: string;
    enabled !: boolean;
    role !: Role;// []
}