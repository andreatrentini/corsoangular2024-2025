import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiSquadraComponent } from './aggiungi-squadra.component';

describe('AggiungiSquadraComponent', () => {
  let component: AggiungiSquadraComponent;
  let fixture: ComponentFixture<AggiungiSquadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiSquadraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiSquadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
