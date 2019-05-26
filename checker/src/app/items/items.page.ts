import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Item } from './items.model';
import { OdooRequest } from './odoo-request'
import { ItemsService } from './items.service';
import { Subscription } from 'rxjs';
import { OdooRpcService } from '../odoo-rpc.service';

@Component({
  selector: "app-items",
  templateUrl: "./items.page.html",
  styleUrls: ["./items.page.scss"]
})
export class ItemsPage implements OnInit, OnDestroy {
  // private itemsChanged: Subscription;
  items: Item[];
  odooRequests: OdooRequest[];
  isItemsLoading: Boolean = true;
  constructor(
    private itemsServise: ItemsService,
    private odooRpc: OdooRpcService
  ) {}

  ngOnInit() {
   console.log("ionViewWillEnter");
   this.onRefreshClick();
  }
  onRefreshClick() {

   this.isItemsLoading = true;
   this.odooRpc.get("http://localhost:5002").subscribe(odooList => {
     this.odooRequests = odooList;
     this.isItemsLoading = false;
   });
  }
  onAddItem() {}
  ionViewWillEnter() {
    
  }
  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }
  ionViewDidlLeave() {
    console.log("ionViewDidlLeave");
  }
  ngOnDestroy() {
    // this.itemsChanged.unsubscribe();
  }
}
