import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectboxesComponent } from './selectboxes.component';

describe('SelectboxesComponent', () => {
  let component: SelectboxesComponent;
  let fixture: ComponentFixture<SelectboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
