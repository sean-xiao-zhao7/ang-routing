import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  fragment = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.allowEdit =
      this.route.snapshot.queryParams.allowEdit == 1 ? true : false;
    this.fragment = this.route.snapshot.fragment;
    this.server = this.serversService.getServer(this.route.snapshot.params.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(params.id);
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params.allowEdit === '1' ? true : false;
    });
    // this.route.fragment.subscribe((params: Params) => {
    //   this.fragment = params.fragment;
    // });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
