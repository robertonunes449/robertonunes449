import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { AddclientComponent } from 'src/app/dialogs/addclient/addclient.component';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { EditclientComponent } from 'src/app/dialogs/editclient/editclient.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  clients: Client;
  client: Client;
  dataSource: MatTableDataSource<Client>;
  displayedColumns = ['seqNo', 'name', 'surname', 'date', 'country', 'dni', 'city', 'address', 'admin'];


  constructor(
    public dialog: MatDialog,
    private clientService: ClientService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.refreshClients()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  addClientDialog() {
    let dialogRef = this.dialog.open(AddclientComponent);
    dialogRef.afterClosed()
      .subscribe(
        res => {
          setTimeout(() => {
            this.refreshClients();
          }, 500);
        },
        err => {
          console.log(err)
        }
      )
  }

  editClientDialog(clients: Client) {
    let dialogRef = this.dialog.open(EditclientComponent, {
      data: clients
    });
    dialogRef.afterClosed()
      .subscribe(
        res => {
          setTimeout(() => {
            this.refreshClients();
            for (let i = 0; i < this.dataSource.data.length; i++) {
              if (this.dataSource.data[i].dni === clients.dni) {
                this.clients = this.dataSource.data[i]
                break;
              }
            }
            this.viewClient(this.clients);
          }, 500);
        },
        err => {
          console.log(err)
        }
      )
  }

  //Refresh Table
  refreshClients() {
    const clients: Client[] = [];
    this.clients = JSON.parse(localStorage.getItem('ls_clients')) || [];
    for (let i = 0; i < Object.keys(this.clients).length; i++) { clients.push(this.clients[i]); }
    this.dataSource = new MatTableDataSource(clients);
  }

  //View Client
  viewClient(clients: Client) {
    this.client = clients;
    return this.client;
  }

  //Deleted Client
  deleteClient(client: Client) {
    this.dataSource.data = this.dataSource.data.filter((value) => {
      this.clientService.deleteclient(client)
      this.client = null
      this.refreshClients()
      return value.dni != client.dni;
    });
    this.toastr.warning('Eliminado!', 'Cliente');
  }


}
