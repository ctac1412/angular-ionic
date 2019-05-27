import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { RequestItem } from './interfaces/request-item.interface';
import { OdooService } from '../odoo.service';
import { Lab } from './interfaces/lab.interface';
import { RequestService } from './request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss']
})
export class RequestPage implements OnInit {
  requestItems: RequestItem[];
  labsItem: Lab[];
  isLoading = true;
  activeSegment = 'request';
  labSelectValue = 0;
  constructor(private odooService: OdooService, private reqService: RequestService) { }

  ngOnInit() {
    this.onRefreshList();
  }
  onItemClick(e:any) {

  }
  onRefreshLabs() {
    this.odooService
    .get('labs')
    .subscribe(requests => {
      this.labsItem = requests;
    });
  }

  onRefreshList(reqType = this.activeSegment, labId = this.labSelectValue) {
    this.isLoading = true;
    this.odooService
      .get('document_request/' + reqType + '/' + labId)
      .subscribe(requests => {
        this.requestItems = requests;
        this.reqService.actualRequestList = [...requests];
        this.isLoading = false;
      });
  }

  selectChanged(e: any) {
    this.labSelectValue = e.detail.value;
    this.onRefreshList();
  }

  segmentChanged(e: any) {
    this.activeSegment = e.detail.value;
    this.onRefreshList(e.detail.value);
  }
  ionViewWillEnter() {
    // console.log('ionViewWillEnter');
    this.onRefreshLabs();
  }
  // ionViewDidEnter() {
  //   console.log('ionViewDidEnter');
  // }

  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave');
  // }
  // ionViewDidlLeave() {
  //   console.log('ionViewDidlLeave');
  // }
}
