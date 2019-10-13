import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsoualComponent } from './crsoual.component';

describe('CrsoualComponent', () => {
  let component: CrsoualComponent;
  let fixture: ComponentFixture<CrsoualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrsoualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrsoualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
