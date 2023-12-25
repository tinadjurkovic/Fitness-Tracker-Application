import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthenMusclesComponent } from './strengthen-muscles.component';

describe('StrengthenMusclesComponent', () => {
  let component: StrengthenMusclesComponent;
  let fixture: ComponentFixture<StrengthenMusclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrengthenMusclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrengthenMusclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
