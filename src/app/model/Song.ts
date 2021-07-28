export class Song {
  private nameSong: string;
  private lyrics: string;
  private avatarUrl: string;
  private mp3Url: string
  constructor(nameSong: string, lyrics: string, avatarUrl: string, mp3Url: string) {
    this.nameSong = nameSong;
    this.lyrics = lyrics;
    this.avatarUrl = avatarUrl;
    this.mp3Url = mp3Url;
  }
}
