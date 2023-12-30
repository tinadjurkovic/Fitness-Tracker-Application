import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GainWeightComponent } from './gain-weight.component';

describe('GainWeightComponent', () => {
  let component: GainWeightComponent;
  let fixture: ComponentFixture<GainWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GainWeightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GainWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
