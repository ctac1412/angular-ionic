import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServerService {
  serverChanged = new Subject<string[]>();
  servers: string[] = [
    'https://tsl.advance-labs.ru',
    'https://fgis-nps.advance-labs.ru'
  ];

  addServer(name: string) {
    this.servers.push(name);
    this.serverChanged.next(this.servers);
  }

  removeServer(name: string) {
    this.servers = this.servers.filter(server => {
      return server !== name;
    });
    this.serverChanged.next(this.servers);
  }
}
