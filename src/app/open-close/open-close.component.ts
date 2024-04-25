import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';
import { RouterOutlet } from '@angular/router';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-open-close',
  standalone: true,
  imports: [RouterOutlet, MdbCarouselModule, CommonModule, FormsModule, ReactiveFormsModule, ImageSliderComponent, MatSlideToggleModule, NgbCarouselModule],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.css'
})
export class OpenCloseComponent {


  slides: any[] = [];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  onSlideChange(): void {
    console.log('slide change');
  }
}
