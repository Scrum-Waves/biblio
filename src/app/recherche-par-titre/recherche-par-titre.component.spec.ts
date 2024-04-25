import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParTitreComponent } from './recherche-par-titre.component';

describe('RechercheParTitreComponent', () => {
  let component: RechercheParTitreComponent;
  let fixture: ComponentFixture<RechercheParTitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheParTitreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
