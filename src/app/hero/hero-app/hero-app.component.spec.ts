import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAppComponent } from './hero-app.component';

describe('HeroAppComponent', () => {
  let component: HeroAppComponent;
  let fixture: ComponentFixture<HeroAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
