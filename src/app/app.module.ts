import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsContainerComponent } from './component/posts-container/posts-container.component';
import { SearchByTitlePipe } from './pipe/search-by-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsContainerComponent,
    SearchByTitlePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
