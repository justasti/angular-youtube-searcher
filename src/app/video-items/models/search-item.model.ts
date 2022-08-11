import ThumbnailItem from './thumbnail.model';

export default class SearchItem {
  constructor(
    public kind: string,
    public etag: string,
    public id: string,
    public snippet: {
      publishedAt: string,
      channelId: string,
      title: string,
      description: string,
      thumbnails: {
        default: ThumbnailItem,
        medium: ThumbnailItem,
        high: ThumbnailItem,
        standard: ThumbnailItem,
        maxres: ThumbnailItem,
      },
      channelTitle: string,
      tags: string[],
      categoryId: string | number,
      liveBroadcastContent: string,
      localized: { title: string, description: string },
      defaultAudioLanguage: string,
    },
    public statistics: {
      viewCount: string,
      likeCount: string,
      dislikeCount: string,
      favoriteCount: string,
      commentCount: string,
    },
  ) {
    this.kind = kind;
    this.etag = etag;
    this.id = id;
    this.snippet = snippet;
    this.statistics = statistics;
  }
}
