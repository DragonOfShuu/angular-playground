import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferCommentsComponent } from './defer-comments.component';

describe('DeferCommentsComponent', () => {
  let component: DeferCommentsComponent;
  let fixture: ComponentFixture<DeferCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
