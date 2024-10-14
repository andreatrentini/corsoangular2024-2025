import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadreCalcioComponent } from './squadre-calcio.component';

describe('SquadreCalcioComponent', () => {
  let component: SquadreCalcioComponent;
  let fixture: ComponentFixture<SquadreCalcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquadreCalcioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquadreCalcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
