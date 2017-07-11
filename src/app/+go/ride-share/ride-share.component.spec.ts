import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideShareComponent } from './ride-share.component';

describe('RideShareComponent', () => {
  let component: RideShareComponent;
  let fixture: ComponentFixture<RideShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
