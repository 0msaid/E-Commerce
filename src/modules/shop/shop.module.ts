import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModuleModule } from 'src/shared_modules/sh_modules/shared-module/shared-module.module';

@NgModule({
  declarations: [ShopListComponent, ProductDetailsComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModuleModule],
})
export class ShopModule {}
