import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InComponentChangeComponent } from './in-component-change.component';

describe('InComponentChangeComponent', () => {
  let component: InComponentChangeComponent;
  let fixture: ComponentFixture<InComponentChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InComponentChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InComponentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
