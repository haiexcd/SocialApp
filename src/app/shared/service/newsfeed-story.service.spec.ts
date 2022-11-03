import { TestBed } from '@angular/core/testing';

import { NewsfeedStoryService } from './newsfeed-story.service';

describe('NewsfeedStoryService', () => {
  let service: NewsfeedStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsfeedStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
