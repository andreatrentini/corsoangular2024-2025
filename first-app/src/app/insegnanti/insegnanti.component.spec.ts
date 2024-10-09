import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsegnantiComponent } from './insegnanti.component';

describe('InsegnantiComponent', () => {
  let component: InsegnantiComponent;
  let fixture: ComponentFixture<InsegnantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsegnantiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsegnantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
