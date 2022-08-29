import Thumbnail from './thumbnail.interface';

export default interface HttpRequestItem {
  etag: string,
  id: {
    videoId: string,
    kind: string,
  },
  kind: string,
  snippet: {
    categoryId: string,
    channelId: string,
    channelTitle: string,
    defaultAudioLanguage: string,
    description: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string,
    },
    publishedAt: string,
    tags: string[],
    thumbnails: {
      default: Thumbnail,
      high: Thumbnail,
      medium: Thumbnail,
    }
    title: string,
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    favoriteCount: string,
    commentCount: string,
  },
  items: any[],
  pageInfo: {},
}
