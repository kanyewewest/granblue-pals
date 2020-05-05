import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiBarComponent } from './emoji-bar.component';

describe('EmojiBarComponent', () => {
  let component: EmojiBarComponent;
  let fixture: ComponentFixture<EmojiBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmojiBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
