import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayActiveComponent } from './stay-active.component';

describe('StayActiveComponent', () => {
  let component: StayActiveComponent;
  let fixture: ComponentFixture<StayActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StayActiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
