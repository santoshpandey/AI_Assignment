import { TestBed } from '@angular/core/testing';

import { PostsApiService } from './postsapi.service';

describe('PostsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsApiService = TestBed.get(PostsApiService);
    expect(service).toBeTruthy();
  });
});
