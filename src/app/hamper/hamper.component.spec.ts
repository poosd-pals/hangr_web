import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamperComponent } from './hamper.component';

describe('HamperComponent', () => {
  let component: HamperComponent;
  let fixture: ComponentFixture<HamperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
