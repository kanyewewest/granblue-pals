import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPalComponent } from './card-pal.component';

describe('CardPalComponent', () => {
  let component: CardPalComponent;
  let fixture: ComponentFixture<CardPalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardPalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
