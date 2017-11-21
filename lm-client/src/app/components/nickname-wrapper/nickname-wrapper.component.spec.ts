import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameWrapperComponent } from './nickname-wrapper.component';

describe('NicknameWrapperComponent', () => {
  let component: NicknameWrapperComponent;
  let fixture: ComponentFixture<NicknameWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicknameWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
