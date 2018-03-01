import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStoryComponent } from './team-story.component';

describe('TeamStoryComponent', () => {
  let component: TeamStoryComponent;
  let fixture: ComponentFixture<TeamStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
