import { Ascenseur } from "./Ascenseur.model";

export interface Panne{
    id?:number,
    datePanne?: Date,
    descPanne?: string,
    asc?: Ascenseur
    
}