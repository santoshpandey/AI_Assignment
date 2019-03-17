import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {
  private baseURL = 'https://hn.algolia.com/api/v1/search_by_date/';

  constructor(private http: HttpClient) { }

  getPosts(tag: string): Observable<any> {
    const params = new HttpParams()
        .set('tags', tag);
    return this.http.get(`${this.baseURL}?${params}`)
      .pipe(
        map(res => res)
      );
  }

}
