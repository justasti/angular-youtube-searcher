import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import videos from '../../../items';
import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export default class VideoDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

  selectedVideoId: string = '';

  selectedVideo!: SearchItem[];

  ngOnInit() {
    this.selectedVideoId = this.route.snapshot.params['id'];
    this.selectedVideo = videos.filter((video) => video.id === this.selectedVideoId);
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
