import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';
import EmptyObjectGeneratorService from 'src/app/shared/services/empty-object-generator.service';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  constructor(
    private http: HttpClient,
    private objectGenerator: EmptyObjectGeneratorService,
  ) {}

  videos: HttpRequestItem[] = [];

  private apiData = new BehaviorSubject<HttpRequestItem[]>([this
    .objectGenerator.generateEmptyRequestObject()]);

  public apiData$ = this.apiData.asObservable();

  setData(data: HttpRequestItem[]) {
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

  getVideos(searchText: string): Observable<HttpRequestItem[]> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('maxResults', 24)
      .set('q', searchText);
    return this.http.get<HttpRequestItem[]>('search', { params }).pipe(
      map((res) => {
        const videos: HttpRequestItem[] = [];
        Object.entries(res).forEach(([key, val]: any) => {
          if (key === 'items') {
            [...val].forEach((vid) => videos.push(vid));
          }
        });
        const videoIds: string[] = [];
        videos.forEach((vid) => videoIds.push(vid.id.videoId));
        return videoIds;
      }),
      switchMap((vidIds) => this.getVideosByIds(...vidIds)),
    );
  }

  getVideosByIds(...ids: string[]): Observable<HttpRequestItem[]> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', ids.join());
    return this.http.get<HttpRequestItem[]>('videos', { params }).pipe(
      map((res) => {
        const videosById: HttpRequestItem[] = [];
        Object.entries(res).forEach(([key, val]: any) => {
          if (key === 'items') {
            [...val].forEach((vid) => videosById.push(vid));
          }
        });
        this.videos = videosById;
        return videosById;
      }),
    );
  }
}
