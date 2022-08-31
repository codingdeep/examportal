import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldScratchComponent } from './input-field-scratch.component';

describe('InputFieldScratchComponent', () => {
  let component: InputFieldScratchComponent;
  let fixture: ComponentFixture<InputFieldScratchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldScratchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldScratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
