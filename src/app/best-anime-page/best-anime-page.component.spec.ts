import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestAnimePageComponent } from './best-anime-page.component';

describe('BestAnimePageComponent', () => {
  let component: BestAnimePageComponent;
  let fixture: ComponentFixture<BestAnimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestAnimePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestAnimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
