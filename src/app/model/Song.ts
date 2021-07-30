export class Song {
  public id: number;
  public nameSong: string;
  public lyrics: string;
  public avatarUrl: string;
  public mp3Url: string
  constructor(nameSong: string, lyrics: string, avatarUrl: string, mp3Url: string) {
    this.nameSong = nameSong;
    this.lyrics = lyrics;
    this.avatarUrl = avatarUrl;
    this.mp3Url = mp3Url;
  }
}
