import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputboxesComponent } from './inputboxes.component';

describe('InputboxesComponent', () => {
  let component: InputboxesComponent;
  let fixture: ComponentFixture<InputboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
