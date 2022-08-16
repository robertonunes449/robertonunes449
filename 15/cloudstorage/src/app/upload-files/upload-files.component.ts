import { Component, OnInit } from '@angular/core';
import { FilesService } from '../files.service';
import { FileEntry } from '../models/FileEntry.model';


@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  files: FileEntry[] = []; 

  constructor(private filesService: FilesService,) { }

  ngOnInit() {
  }

  onDropFiles(files: FileList) {
    this.files.slice(0, this.files.length);
    for (let i=0; i < files.length; i++) {     
      this.files.push({
        file: files.item(i), percentage: null, uploading: null, finished: null, paused: null,
        error: null, canceled: null, bytesuploaded: null, state: null, task: null
      });
    }
  }

  removeFileFromList(i) {
    this.files.splice(i, 1);
  }

  uploadedAll() {
    for (let i=0; i<this.files.length; i++) {
      this.filesService.upload(this.files[i]);
      
    }
  }

}
