import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './views/main-layout/main-layout.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPageComponent } from './views/product-page/product-page.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'product/:productId', component: ProductPageComponent },
      { path: '**', component: PageNotFoundComponent}
    ],
  },
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    ProductCardComponent,
    ProductPageComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, ShareModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopModule {}
