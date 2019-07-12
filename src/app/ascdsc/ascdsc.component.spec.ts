import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscdscComponent } from './ascdsc.component';

describe('AscdscComponent', () => {
  let component: AscdscComponent;
  let fixture: ComponentFixture<AscdscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscdscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscdscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
