import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAppNewComponent } from './hero-app-new.component';

describe('HeroAppNewComponent', () => {
  let component: HeroAppNewComponent;
  let fixture: ComponentFixture<HeroAppNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAppNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAppNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
