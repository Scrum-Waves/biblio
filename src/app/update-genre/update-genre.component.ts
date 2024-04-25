import { Genre } from "../models/genre.model";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-update-genre',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './update-genre.component.html',
  styleUrl: './update-genre.component.css'
})
export class UpdateGenreComponent implements OnInit  {

  //genreUpdated:Genre = {"idGen":0,"nomGen":"", "descriptionGen":""};

  @Input()
  genre! : Genre;

  /*@Input()
  data! : string;*/

  @Output() 
  genreUpdated = new EventEmitter<Genre>();

  @Input()
  ajout!:boolean;


  constructor() { }

  ngOnInit(): void {
  }


  saveGenre(){
    this.genreUpdated.emit(this.genre);
    }

}
