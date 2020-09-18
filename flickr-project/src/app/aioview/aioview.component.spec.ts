import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AioviewComponent } from './aioview.component';

describe('AioviewComponent', () => {
  let component: AioviewComponent;
  let fixture: ComponentFixture<AioviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AioviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AioviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
