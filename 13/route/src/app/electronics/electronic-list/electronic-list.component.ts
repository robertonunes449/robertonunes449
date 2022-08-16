import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Electronic } from 'src/app/models/electronic';
import { ElectronicService } from 'src/app/services/electronic.service';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit {

  electronics$: Observable<Electronic[]>;

  constructor(private electronicService: ElectronicService) { }

  ngOnInit() {
    this.electronics$ = this.electronicService.electronics$;
  }

}
