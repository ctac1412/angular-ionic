import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from './servers.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html"
})
export class ServersComponent implements OnInit, OnDestroy {
  private serverChanged: Subscription;
  serverList: string[];
  // private srvService: ServerService;

  constructor(private srvService: ServerService) {
    // this.serverList = srvService.servers;
    // this.srvService = srvService;
  }
  onRemoveServer(name: string) {
    this.srvService.removeServer(name);
  }

  ngOnInit() {
    this.serverList = this.srvService.servers;
    this.serverChanged = this.srvService.serverChanged.subscribe(servers => {
      this.serverList = servers;
    });
  }
  ngOnDestroy() {
    this.serverChanged.unsubscribe()
  }
}
