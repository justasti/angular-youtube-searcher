/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import Enums from 'src/app/shared/enums/enums.enum';
import HttpRequestItem from 'src/app/shared/interfaces/http-request-item.interface';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  transform(
    videos: HttpRequestItem[],
    sortBy?: string,
    sortDirection?: string,
    keyphrase?: string,
  ): HttpRequestItem[] {
    let searchResults: HttpRequestItem[] = [];
    if (sortBy === '') return videos;
    if (sortBy === Enums.DATE) {
      searchResults = videos.sort((a: HttpRequestItem, b:HttpRequestItem) => a.snippet.publishedAt
        .localeCompare(b.snippet.publishedAt));
    } else if (sortBy === Enums.VIEWS) {
      searchResults = videos
        .sort((a: HttpRequestItem, b:HttpRequestItem) => parseInt(a?.statistics?.viewCount || '0', 10)
          - parseInt(b?.statistics?.viewCount || '0', 10));
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
