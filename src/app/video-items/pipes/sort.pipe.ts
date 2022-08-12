/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import Enums from 'src/app/shared/enums/enums.enum';
import SearchItem from '../models/search-item.model';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  transform(
    videos: SearchItem[],
    sortBy?: string,
    sortDirection?: string,
    keyphrase?: string,
  ): SearchItem[] {
    let searchResults: SearchItem[] = [];
    if (sortBy === '') return videos;
    if (sortBy === Enums.DATE) {
      searchResults = videos.sort((a: SearchItem, b:SearchItem) => a.snippet.publishedAt
        .localeCompare(b.snippet.publishedAt));
    } else if (sortBy === Enums.VIEWS) {
      searchResults = videos
        .sort((a: SearchItem, b:SearchItem) => parseInt(a.statistics.viewCount, 10)
          - parseInt(b.statistics.viewCount, 10));
    } else if (sortBy === Enums.WORD && keyphrase !== undefined) {
      searchResults = videos.sort((a) => (a.snippet.title.toLowerCase()
        .includes(keyphrase.toLowerCase()) ? -1 : 1));
    }
    if (sortDirection === Enums.DESC) {
      searchResults = searchResults.reverse();
    }
    return searchResults;
  }
}
