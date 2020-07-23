import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemamovieDeleteComponent } from './cinemamovie-delete.component';

describe('CinemamovieDeleteComponent', () => {
  let component: CinemamovieDeleteComponent;
  let fixture: ComponentFixture<CinemamovieDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemamovieDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemamovieDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
