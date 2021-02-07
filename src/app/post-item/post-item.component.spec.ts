import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemComponent } from './post-item.component';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should upvote correctly', () => {
    expect(component.upvote({
      id: 88,
      title: 'Sample post',
      body: 'Sample body',
      votes: 1
    })).toEqual({
      id: 88,
      title: 'Sample post',
      body: 'Sample body',
      votes: 2
    });
  });
});
