import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassificaComponent } from './edit-classifica.component';

describe('EditClassificaComponent', () => {
  let component: EditClassificaComponent;
  let fixture: ComponentFixture<EditClassificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditClassificaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClassificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
