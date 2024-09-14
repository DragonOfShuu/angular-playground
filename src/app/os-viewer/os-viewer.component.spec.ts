import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsViewerComponent } from './os-viewer.component';

describe('OsViewerComponent', () => {
  let component: OsViewerComponent;
  let fixture: ComponentFixture<OsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
