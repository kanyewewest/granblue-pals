import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPalNewComponent } from './card-pal-new.component';

describe('CardPalNewComponent', () => {
  let component: CardPalNewComponent;
  let fixture: ComponentFixture<CardPalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
