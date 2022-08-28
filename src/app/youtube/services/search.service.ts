import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  constructor(private http: HttpClient) {}

  videos: any[] = [];

  private apiData = new BehaviorSubject<HttpRequestItem>({
    etag: '',
    items: [],
    kind: '',
    nextPageToken: '',
    pageInfo: {},
    regionCode: '',
  });

  public apiData$ = this.apiData.asObservable();

  fetchVideos(query: string) {
    const API_KEY: string = 'AIzaSyBDTLskZ1tu8pzCp_hJez9S6O2eRA_GjFg';
    const API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
    const URL_PARAMS: HttpParams = new HttpParams()
      .set('key', API_KEY)
      .set('q', query)
      .set('maxResults', 50)
      .set('part', 'id')
      .set('part', 'statistics')
      .set('part', 'snippet');
    return this.http.get(API_URL, { params: URL_PARAMS });
  }

  setData(data: HttpRequestItem) {
    this.apiData.next(data);
  }

  searchPhrase: string = '';

  private showResults = new BehaviorSubject<boolean>(false);

  public showResults$ = this.showResults.asObservable();

  showSearchResults() {
    if (this.searchPhrase.length > 2) {
      this.showResults.next(true);
    } else {
      this.showResults.next(false);
    }
  }
}
