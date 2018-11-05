import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InComponentChangeChildComponent } from './in-component-change-child.component';

describe('InComponentChangeChildComponent', () => {
  let component: InComponentChangeChildComponent;
  let fixture: ComponentFixture<InComponentChangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InComponentChangeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InComponentChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
