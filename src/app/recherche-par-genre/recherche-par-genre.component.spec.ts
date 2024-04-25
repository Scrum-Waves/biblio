import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParGenreComponent } from './recherche-par-genre.component';

describe('RechercheParGenreComponent', () => {
  let component: RechercheParGenreComponent;
  let fixture: ComponentFixture<RechercheParGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheParGenreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
