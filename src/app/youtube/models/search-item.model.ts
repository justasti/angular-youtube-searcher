import Thumbnail from '../../shared/interfaces/thumbnail.interface';

export default class SearchItem {
  constructor(
    public kind: string,
    public etag: string,
    public id: { kind: string, videoId: string },
    public snippet: {
      publishedAt: string,
      channelId: string,
      title: string,
      description: string,
      thumbnails: {
        default: Thumbnail,
        medium: Thumbnail,
        high: Thumbnail,
      },
      channelTitle: string,
      liveBroadcastContent: string,
      publishTime: string,
    },
    public statistics? : {
      viewCount?: string,
      likeCount?: string,
      dislikeCount?: string,
      favoriteCount?: string,
      commentCount?: string,
    },
    // public kind: string,
    // public etag: string,
    // public id: string,
    // public snippet: {
    //   publishedAt: string,
    //   channelId: string,
    //   title: string,
    //   description: string,
    //   thumbnails: {
    //     default: Thumbnail,
    //     medium: Thumbnail,
    //     high: Thumbnail,
    //     standard: Thumbnail,
    //     maxres: Thumbnail,
    //   },
    //   channelTitle: string,
    //   tags: string[],
    //   categoryId: string | number,
    //   liveBroadcastContent: string,
    //   localized: { title: string, description: string },
    //   defaultAudioLanguage: string,
    // },
    // public statistics: {
    //   viewCount: string,
    //   likeCount: string,
    //   dislikeCount: string,
    //   favoriteCount: string,
    //   commentCount: string,
    // },
  ) {
    this.kind = kind;
    this.etag = etag;
    this.id = id;
    this.snippet = snippet;
    // this.statistics = statistics;
  }
}
