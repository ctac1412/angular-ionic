import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Item } from './items.model';
import { ItemsService } from './items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-items",
  templateUrl: "./items.page.html",
  styleUrls: ["./items.page.scss"]
})
export class ItemsPage implements OnInit,OnDestroy {
  private itemsChanged: Subscription;
  items: Item[];
  constructor(private itemsServise: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsServise.getAllItems();
    this.itemsChanged = this.itemsServise.itemsChanged.subscribe(items => {
      this.items = items;
    });
  }
  ngOnDestroy() {
    this.itemsChanged.unsubscribe();
  }
}
