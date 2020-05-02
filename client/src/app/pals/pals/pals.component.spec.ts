import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalsComponent } from './pals.component';

describe('PalsComponent', () => {
  let component: PalsComponent;
  let fixture: ComponentFixture<PalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
