import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import videos from '../../../items';
import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export default class VideoDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  selectedVideoId: string = '';

  selectedVideo!: SearchItem[];

  // selectedVideo: SearchItem = {
  //   kind: '',
  //   etag: '',
  //   id: '',
  //   snippet: {
  //     publishedAt: '',
  //     channelId: '',
  //     categoryId: '',
  //     channelTitle: '',
  //     defaultAudioLanguage: '',
  //     description: '',
  //     liveBroadcastContent: '',
  //     localized: { title: '', description: '' },
  //     tags: [],
  //     thumbnails: {
  //       default: {
  //         height: 0,
  //         width: 0,
  //         url: '',
  //       },
  //       high: {
  //         height: 0,
  //         width: 0,
  //         url: '',
  //       },
  //       maxres: {
  //         height: 0,
  //         width: 0,
  //         url: '',
  //       },
  //       medium: {
  //         height: 0,
  //         width: 0,
  //         url: '',
  //       },
  //       standard: {
  //         height: 0,
  //         width: 0,
  //         url: '',
  //       },
  //     },
  //     title: '',
  //   },
  //   statistics: {
  //     commentCount: '',
  //     dislikeCount: '',
  //     favoriteCount: '',
  //     likeCount: '',
  //     viewCount: '',
  //   },
  // };

  ngOnInit() {
    this.selectedVideoId = this.route.snapshot.params['id'];
    this.selectedVideo = videos.filter((video) => video.id === this.selectedVideoId);
  }
}
