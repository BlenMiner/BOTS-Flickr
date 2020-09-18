import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseviewComponent } from './browseview.component';

describe('BrowseviewComponent', () => {
  let component: BrowseviewComponent;
  let fixture: ComponentFixture<BrowseviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
