import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomegComponent } from './tomeg.component';

describe('TomegComponent', () => {
  let component: TomegComponent;
  let fixture: ComponentFixture<TomegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
