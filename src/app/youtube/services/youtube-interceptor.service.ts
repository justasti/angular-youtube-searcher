import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class YoutubeInterceptor implements HttpInterceptor {
  API_KEY: string = 'AIzaSyBDTLskZ1tu8pzCp_hJez9S6O2eRA_GjFg';

  API_URL: string = 'https://www.googleapis.com/youtube/v3';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(
      request.clone({
        url: `${this.API_URL}/${request.url}`,
        setParams: { key: this.API_KEY },
      }),
    );
  }
}
