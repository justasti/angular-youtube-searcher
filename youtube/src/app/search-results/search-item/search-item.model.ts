export default class SearchItem {
  constructor(
    public imagePath: string,
    public stats: {
      views: number;
      likes: number;
      dislikes: number;
      comments: number;
    },
    public title: string,
  ) {
    this.imagePath = imagePath;
    this.stats = stats;
    this.title = title;
  }
}
