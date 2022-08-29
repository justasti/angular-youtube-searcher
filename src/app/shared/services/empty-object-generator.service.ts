/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import HttpRequestItem from '../interfaces/http-request-item.interface';

@Injectable({
  providedIn: 'root',
})
export default class EmptyObjectGeneratorService {
  generateEmptyRequestObject(): HttpRequestItem {
    return {
      etag: '',
      id: {
        videoId: '',
        kind: '',
      },
      kind: '',
      snippet: {
        categoryId: '',
        channelId: '',
        channelTitle: '',
        defaultAudioLanguage: '',
        description: '',
        liveBroadcastContent: '',
        localized: {
          title: '',
          description: '',
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
        viewCount: '',
        likeCount: '',
        favoriteCount: '',
        commentCount: '',
      },
      items: [],
      pageInfo: {},
    };
  }
}
