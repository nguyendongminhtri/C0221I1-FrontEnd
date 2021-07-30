import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../service/song.service';
import {Song} from '../../../model/Song';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
  status = 'Please fill in the form to create Song!'
  isCheckUploadAvatar = false;
  isCheckUploadFile = false;
  form: any = {};
  error1: any = {
    message: "noavatar"
  }
  error2: any = {
    message: "nomp3url"
  }
  success: any = {
    message: "yes"
  }
  song: Song;
  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }
  ngSubmit(){
    this.song = new Song(
      this.form.nameSong,
      this.form.lyrics,
      this.form.avatarUrl,
      this.form.mp3Url
    )
    this.songService.createSong(this.song).subscribe(data =>{
      if(JSON.stringify(this.error1)==JSON.stringify(data)){
        this.status = 'The avatar is required! Please select upload avatar'
      }
      if(JSON.stringify(this.error2)==JSON.stringify(data)){
        this.status = 'The file is required! Please select upload file'
      }
      if(JSON.stringify(this.success)==JSON.stringify(data)){
        this.status = 'Create success!'
      }
    }, error => {
      this.status = 'Please login before create Song'
    })
  }
  onChangeAvatar($event){
    this.form.avatarUrl = $event;
    this.isCheckUploadAvatar = true;
  }
  onChangeFile($event){
    this.form.mp3Url = $event;
    this.isCheckUploadFile = true;
  }
}
