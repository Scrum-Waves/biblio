import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';
import { RouterOutlet } from '@angular/router';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSliderComponent } from './image-slider/image-slider.component';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, MdbCarouselModule, CommonModule, FormsModule, ReactiveFormsModule, ImageSliderComponent, MatSlideToggleModule, NgbCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biblio';
}
