import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  {
    path: 'items',
    children: [
      { 
        path: '', 
        loadChildren: './items/items.module#ItemsPageModule' 
      },
      {
        path: ':itemId',
        loadChildren:
          './items/item-detail/item-detail.module#ItemDetailPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
