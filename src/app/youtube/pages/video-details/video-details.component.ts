import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export default class VideoDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private searchService: SearchService,
  ) {
    this.searchService.apiData$.subscribe((data) => { this.videos = data; });
  }

  videos!: HttpRequestItem[];

  selectedVideo: HttpRequestItem = {
    etag: '',
    id: '',
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

  selectedVideoId: string = '';

  @Input()
    item!: HttpRequestItem;

  ngOnInit() {
    this.selectedVideoId = this.route.snapshot.params['id'];
    this.searchService.getVideosByIds(this.selectedVideoId)
      .subscribe((response) => {
        this.selectedVideo = response[0] as unknown as HttpRequestItem;
      });
  }

  getParsedDate() {
    return new Date(this.selectedVideo.snippet.publishedAt)
      .toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      });
  }

  goBack() {
    this.location.back();
  }
}
