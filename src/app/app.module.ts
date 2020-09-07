import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CountdownModule} from 'ngx-countdown';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { SwiperConfigInterface,SWIPER_CONFIG, SwiperModule} from 'ngx-swiper-wrapper';
import { CustomMaterialModule} from './home/navbar/custom-material/custom-material.module';
import { CustomModalModule} from './view-product/tab-infos/custom-modal/custom-modal.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {CardModule} from 'ngx-card/ngx-card';
import { 
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSliderModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatSelectModule,
  MatGridListModule,
  MatTableModule,
  MatChipsModule
} from '@angular/material';
import { HorizontalListComponent } from './home/horizontal-list/horizontal-list.component';
import { ItemComponent } from './home/horizontal-list/item/item.component';
import { ConfirmDialogComponent } from './home/navbar/confirm-dialog/confirm-dialog.component';
import { FooterComponent } from './home/footer/footer.component';
import { ViewComponent } from './view-product/view/view.component';
import { HomeComponent } from './home/home/home.component';
import { TabInfosComponent } from './view-product/tab-infos/tab-infos.component';
import { PreviewComponent } from './view-product/tab-infos/preview/preview.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { SuccessComponent } from './home/navbar/confirm-dialog/success/success.component';
import { WrongComponent } from './home/navbar/confirm-dialog/wrong/wrong.component';
import { PaymentComponent } from './payment/payment.component';
import { RelatedItemsComponent } from './home/related-items/related-items.component';
import { BigCardComponent } from './home/home/big-card/big-card.component';
import { SmallCardComponent } from './home/home/small-card/small-card.component';
import { OverlayContentComponent } from './home/home/overlay-content/overlay-content.component';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HorizontalListComponent,
    ItemComponent,
    ConfirmDialogComponent,
    FooterComponent,
    ViewComponent,
    HomeComponent,
    TabInfosComponent,
    PreviewComponent,
    CartComponent,
    CartItemComponent,
    SuccessComponent,
    WrongComponent,
    PaymentComponent,
    RelatedItemsComponent,
    BigCardComponent,
    SmallCardComponent,
    OverlayContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    CustomMaterialModule,
    CustomModalModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatBadgeModule,
    PdfViewerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    CardModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    CountdownModule,
    MatChipsModule
  ],
  entryComponents: [ConfirmDialogComponent, PreviewComponent,SuccessComponent,WrongComponent, OverlayContentComponent],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
