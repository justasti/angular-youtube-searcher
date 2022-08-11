/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import SearchItem from '../models/search-item.model';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  transform(videos: SearchItem[], sortBy?: string, sortDirection?: string): SearchItem[] {
    let searchResults: SearchItem[] = [];
    if (sortBy === '') return videos;
    if (sortBy === 'date') {
      searchResults = videos.sort((a: SearchItem, b:SearchItem) => a.snippet.publishedAt
        .localeCompare(b.snippet.publishedAt));
    } else if (sortBy === 'views') {
      searchResults = videos
        .sort((a: SearchItem, b:SearchItem) => parseInt(a.statistics.viewCount, 10)
          - parseInt(b.statistics.viewCount, 10));
    }
    if (sortDirection === 'desc') {
      searchResults = searchResults.reverse();
    }
    return searchResults;
  }
}
