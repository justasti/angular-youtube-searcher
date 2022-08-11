/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import SearchItem from '../models/search-item.model';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  transform(videos: SearchItem[], filterText: string): SearchItem[] {
    if (videos.length === 0 || filterText === '') return videos;
    return videos.filter((video) => video.snippet.title.toLowerCase()
      .includes(filterText.toLowerCase()));
  }
}
