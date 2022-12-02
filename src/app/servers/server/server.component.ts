import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  paramsSubscription: Subscription;
  allowEdit: boolean;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.server = this.serversService.getServer(
      this.route.snapshot.params['id']
    );
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'];

    this.paramsSubscription = this.route.params.subscribe(
      (newParams: Params) => {
        this.server = this.serversService.getServer(newParams.id);
      }
    );

    this.paramsSubscription = this.route.queryParams.subscribe(
      (newParams: Params) => {
        this.allowEdit = newParams.allowEdit;
      }
    );
  }

  editServer(id: number) {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
