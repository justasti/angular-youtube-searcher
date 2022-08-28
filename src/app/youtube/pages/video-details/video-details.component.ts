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

  selectedVideo!: HttpRequestItem[];

  selectedVideoId: string = '';

  @Input()
    item!: HttpRequestItem;

  ngOnInit() {
    this.selectedVideoId = this.route.snapshot.params['id'];
    this.selectedVideo = this.videos
      .filter((item) => item.id === this.selectedVideoId);
  }

  getParsedDate() {
    return new Date(this.selectedVideo[0].snippet.publishedAt)
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
