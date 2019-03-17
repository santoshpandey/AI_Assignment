import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { PostsApiService } from '../../services/postsapi.service';
import { interval } from 'rxjs/internal/observable/interval';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {
  public posts = [];
  modalData;
  public searchString: string;
  public postItem: any;
  public showLoader = false;
  constructor(
    private postsData: PostsApiService,
    public ngxSmartModalService: NgxSmartModalService
    ) { }

  ngOnInit() {
    this.loadPosts();
  }


  loadPosts() {
    this.showLoader = true;
    interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.postsData.getPosts('story'))
      )
      .subscribe(res => {
        this.posts = res.hits ;
        this.showLoader = false;
      })
    ;
  }

  showModal(post) {
    this.ngxSmartModalService.setModalData(post, 'postModal');
    this.modalData = post;
    this.ngxSmartModalService.getModal('postModal').open();
  }

}
