import { Component, Input } from '@angular/core';
import { Livre } from '../models/livre.model';

@Component({
  selector: 'app-livre',
  standalone: true,
  imports: [],
  templateUrl: './livre.component.html',
  styleUrl: './livre.component.css'
})
export class LivreComponent {

  @Input() livre: Livre | undefined;

}
