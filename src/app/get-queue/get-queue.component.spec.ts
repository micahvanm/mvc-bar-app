import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQueueComponent } from './get-queue.component';

describe('GetQueueComponent', () => {
  let component: GetQueueComponent;
  let fixture: ComponentFixture<GetQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetQueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
