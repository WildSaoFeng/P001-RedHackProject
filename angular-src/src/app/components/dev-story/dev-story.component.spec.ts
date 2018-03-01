import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevStoryComponent } from './dev-story.component';

describe('DevStoryComponent', () => {
  let component: DevStoryComponent;
  let fixture: ComponentFixture<DevStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
