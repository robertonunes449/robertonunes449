import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  @Output() droppedfiles = new EventEmitter<FileList>();
  isDraggingOver = false;

  constructor() { }

  ngOnInit() {
  }

  onDragoverEvent(event: DragEvent) {
    event.preventDefault();
    this.isDraggingOver = true;
  }

  onDragleaveEvent(event: DragEvent) {
    event.preventDefault();  
    this.isDraggingOver = false;
  }

  onDropEvent(event: DragEvent) {
    event.preventDefault();
    //console.log(event.dataTransfer.files);
    this.droppedfiles.emit(event.dataTransfer.files);
  }
}
