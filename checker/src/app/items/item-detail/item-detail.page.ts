import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../items.service';
import { Item } from '../items.model';
import { AlertController } from '@ionic/angular';
import { ItemDetailService } from './item-detail.service';

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.page.html",
  styleUrls: ["./item-detail.page.scss"]
})
export class ItemDetailPage implements OnInit {
  loadedItem: Item;
  constructor(
    private activetedRoute: ActivatedRoute,
    private itemsService: ItemsService,
    private router: Router,
    private alertCtrl: AlertController,
    private idService: ItemDetailService
  ) {}

  ngOnInit() {
    this.activetedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("itemId")) {
        this.router.navigate(["/items"]);
        return;
      }
      this.idService.get("http://localhost:5002").subscribe(res => {
        console.log("Сделали запрос");
        console.log(res);
      });

      const itemId = paramMap.get("itemId");
      this.loadedItem = this.itemsService.getItem(itemId);
    });
  }

  ionViewWillEnter() {}

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }
  ionViewDidlLeave() {
    console.log("ionViewDidlLeave");
  }

  onRemoveItem() {
    this.itemsService.removeItem(this.loadedItem.id);
    this.router.navigate(["/items"]);

    // this.alertCtrl
    //   .create({
    //     header: 'Вы уверены?',
    //     message: 'Вы действительно хотите удалить элемент?',
    //     buttons: [
    //       {
    //         text: 'Отмена',
    //         role: 'cancel'
    //       },
    //       {
    //         text: 'Удалить',
    //         handler: () => {
    //           this.itemsService.removeItem(this.loadedItem.id);
    //           this.router.navigate(['/items']);
    //         }
    //       }
    //     ]
    //   })
    //   .then(alertEl => {
    //     alertEl.present();
    //   });
  }
}
