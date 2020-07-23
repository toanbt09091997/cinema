import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaListmovieComponent } from './cinema-listmovie.component';

describe('CinemaListmovieComponent', () => {
  let component: CinemaListmovieComponent;
  let fixture: ComponentFixture<CinemaListmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaListmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaListmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
