import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';
import SearchItem from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  constructor(private http: HttpClient) {}

  videos: any[] = [];

  private apiData = new BehaviorSubject<HttpRequestItem[]>([{
    etag: '',
    id: '',
    items: [],
    kind: '',
    pageInfo: '',
    snippet: {
      categoryId: '',
      channelId: '',
      channelTitle: '',
      defaultAudioLanguage: '',
      description: '',
      liveBroadcastContent: '',
      localized: {
        description: '',
        title: '',
      },
      publishedAt: '',

      tags: [],
      thumbnails: {
        default: {
          height: 0,
          url: '',
          width: 0,
        },
        high: {
          height: 0,
          url: '',
          width: 0,
        },
        medium: {
          height: 0,
          url: '',
          width: 0,
        },
      },
      title: '',
    },
    statistics: {
      commentCount: '',
      favoriteCount: '',
      likeCount: '',
      viewCount: '',
    },
  }]);

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

  getVideos(searchText: string): Observable<SearchItem[]> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('maxResults', 24)
      .set('q', searchText);
    return this.http.get<SearchItem[]>('search', { params }).pipe(
      map((res) => {
        const videos: SearchItem[] = [];
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

  getVideosByIds(...ids: string[]): Observable<SearchItem[]> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', ids.join());
    return this.http.get<SearchItem[]>('videos', { params }).pipe(
      map((res) => {
        const videosById: SearchItem[] = [];
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
