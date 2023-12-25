import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseWeightComponent } from './lose-weight.component';

describe('LoseWeightComponent', () => {
  let component: LoseWeightComponent;
  let fixture: ComponentFixture<LoseWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoseWeightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoseWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
