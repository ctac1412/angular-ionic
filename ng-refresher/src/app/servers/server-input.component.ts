import { Component} from '@angular/core';
import { ServerService } from './servers.service';

@Component({
  selector:'app-server-input',
  templateUrl: './server-input.component.html',
  styleUrls: ['./server-input.component.css']
})
export class ServerInputComponent{

  enteredServerName = '';
  constructor(private srvService: ServerService) {}

  onCreateServer(){
    // console.log(this.enteredServerName);
    this.srvService.addServer(this.enteredServerName)
    this.enteredServerName = '';
  }
};
