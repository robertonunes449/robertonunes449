import { Component, ElementRef, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatList, MatListItem } from '@angular/material';
import { Subscription } from 'rxjs';
import { Message } from './message';
import { SocketIoService } from './socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nickname: string;
  message: string;
  messages: Message[] = [];
  private subscriptionMesssages: Subscription;
  private subscriptionList: Subscription;

  @ViewChild(MatList, {read: ElementRef, static: true}) list: ElementRef;
  @ViewChildren(MatListItem) listItems: QueryList<MatListItem>;

  constructor(
    private socketService: SocketIoService) {

    }

    ngOnInit() {
      this.subscriptionMesssages = this.socketService.messages()
        .subscribe((m: Message) => {
          console.log(m);
          this.messages.push(m);
        });
    }

  ngAfterViewInit() {
    this.subscriptionList = this.listItems.changes.subscribe((e) => {
      this.list.nativeElement.scrollHeight;
      this.list.nativeElement.scrollTop;
      //console.log(this.list.nativeElement.scrollheight)
    });
  }

  send() {
    this.socketService.send({
      from: this.nickname,
      message: this.message
    });
    this.message = '';
  }

  ngOnDestroy() {
    this.subscriptionMesssages.unsubscribe();
    this.subscriptionList.unsubscribe();
  }
}
