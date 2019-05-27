import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { RequestItem } from '../interfaces/request-item.interface';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss']
})
export class RequestDetailPage implements OnInit {
  constructor(
    private activetedRoute: ActivatedRoute,
    private router: Router,
    private rqsService: RequestService
  ) {}
  actualRequest: RequestItem = {};
  activeId: string;

  ngOnInit() {
    this.activetedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('requestId')) {
        this.router.navigate(['/request']);
        return;
      }
      this.activeId = paramMap.get('requestId');
    });
  }

  refreshData() {
    this.actualRequest = this.rqsService.getRequest(+this.activeId);
    if (this.actualRequest === undefined){
      this.router.navigate(['/request']);
    }
  }

  ionViewWillEnter() {
    this.refreshData();
    console.log('ionViewWillEnter', this.actualRequest);
  }

}
