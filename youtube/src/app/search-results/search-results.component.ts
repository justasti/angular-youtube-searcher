/* eslint-disable class-methods-use-this */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import SearchItem from './search-item/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  videos = [
    new SearchItem(
      '../../assets/images/video-thumbnail21.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #21',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail20.jpg',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #20',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail19.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #19',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail18.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #18',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail17.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #17',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail16.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #16',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail15.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #15',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail14.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #14',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail13.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #13',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail12.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #12',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail11.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #11',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail10.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #10',
    ),
    new SearchItem(
      '../../assets/images/video-thumbnail9.png',
      {
        views: 1000, likes: 640, dislikes: 320, comments: 240,
      },
      'Kuji Podcast #9',
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
