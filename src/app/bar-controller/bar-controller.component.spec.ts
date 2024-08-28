import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarControllerComponent } from './bar-controller.component';

describe('BarControllerComponent', () => {
  let component: BarControllerComponent;
  let fixture: ComponentFixture<BarControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
