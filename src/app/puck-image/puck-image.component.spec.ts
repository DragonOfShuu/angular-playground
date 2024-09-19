import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuckImageComponent } from './puck-image.component';

describe('PuckImageComponent', () => {
  let component: PuckImageComponent;
  let fixture: ComponentFixture<PuckImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuckImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuckImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
