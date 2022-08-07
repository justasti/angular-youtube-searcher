import SearchItem from './search-item.model';

export default class SearchResponse {
  constructor(
    public kind: string,
    public etag: string,
    public pageInfo: {},
    public items: SearchItem[],
  ) {
    this.kind = kind;
    this.etag = etag;
    this.pageInfo = pageInfo;
    this.items = items;
  }
}
