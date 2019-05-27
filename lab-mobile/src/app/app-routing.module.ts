import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'workbook',
    loadChildren: './workbook/workbook.module#WorkbookPageModule'
  },
  // { path: 'request', loadChildren: './request/request.module#RequestPageModule' }
  {
    path: 'request',
    children: [
      {
        path: '',
        loadChildren: './request/request.module#RequestPageModule'
      },
      {
        path: ':requestId',
        loadChildren:
          './request/request-detail/request-detail.module#RequestDetailPageModule'
      }
    ]
  }
];

  // {
  //   path: 'items',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './items/items.module#ItemsPageModule'
  //     },

  //   ]
  // }

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
