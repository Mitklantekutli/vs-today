import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonArgsComponent } from './person-args.component';

describe('PersonArgsComponent', () => {
  let component: PersonArgsComponent;
  let fixture: ComponentFixture<PersonArgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonArgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonArgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
