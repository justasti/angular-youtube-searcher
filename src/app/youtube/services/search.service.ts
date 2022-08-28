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
    const API_KEY: string = 'AIzaSyDxqqgmEPIzhOVlN_6gaT7vj4PhK7waZN0';
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

  // getVideos$ = new Subject<any[]>();

  // fetchVideos(query: string): void {
  //   const API_KEY: string = 'AIzaSyDxqqgmEPIzhOVlN_6gaT7vj4PhK7waZN0';
  //   const API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
  //   const URL_PARAMS: HttpParams = new HttpParams()
  //     .set('key', API_KEY)
  //     .set('q', query)
  //     .set('maxResults', 50)
  //     .set('part', 'id')
  //     .set('part', 'statistics')
  //     .set('part', 'snippet');

  //   this.http.get<{
  //     etag: string,
  //     kind: string,
  //     nextPageToken: string,
  //     items: any[]
  //   }>(API_URL, { params: URL_PARAMS }).subscribe((res) => {
  //     this.videos = res.items;
  //   });
  // }

  // getVideos() {
  //   this.getVideos$.next(this.videos);
  // }
}
