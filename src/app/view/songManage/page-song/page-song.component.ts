import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/Song';
import {SongService} from '../../../service/song.service';
import {PageEvent} from '@angular/material/paginator';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-page-song',
  templateUrl: './page-song.component.html',
  styleUrls: ['./page-song.component.scss']
})
export class PageSongComponent implements OnInit {
  totalElements: number = 0;
  songs: Song[] = [];
  loadDing: boolean;
  admin: any = ["ADMIN"];
  isCheckAdmin = false;
  deleteSuccess: any = {
    message: "yes"
}
status = '';
  constructor(private songService: SongService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    if(JSON.stringify(this.tokenService.getRoles())==JSON.stringify(this.admin)){
      this.isCheckAdmin = true;
    }
    this.getListRequest({page: 0, size: 3})
  }
  private getListRequest(request) {
    this.loadDing = true;
    this.songService.pageSong(request).subscribe(data =>{
      console.log('data -->',data);
      this.songs = data['content'];
      console.log('data[content] --->' , data['content']);
      this.totalElements = data['totalElements']
      console.log('totalElements == ', data['totalElements']);
      this.loadDing = false;
    }, error => {
      this.loadDing = false;
    })
  }
  nextPage(event: PageEvent){
    console.log('event -->', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]', request['size']);
    this.getListRequest(request);
  }
  deleteSongById(id: number){
    this.songService.deleteSongById(id).subscribe(data =>{
      if(JSON.stringify(this.deleteSuccess)==JSON.stringify(data)){
        this.status = 'Delete success!'
        // window.location.reload();
        const request = {page: 0, size: 90}
        this.getListRequest(request);
      }
    })
  }
}
