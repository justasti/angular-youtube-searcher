import { Pipe, PipeTransform } from '@angular/core';
import SearchItem from './search-results/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(videos: SearchItem[], filterText: string): SearchItem[] {
    const filteredVideos: SearchItem[] = []
    if (videos.length === 0 || filterText === '') {
      return videos;
    }
    return videos.filter((video) => {
      return video.snippet.title.toLowerCase().includes(filterText.toLowerCase());
    })
  }
}
