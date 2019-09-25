import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroMessagesComponent } from './hero-messages/hero-messages.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule,
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
         InMemoryDataService, { dataEncapsulation: false }
      ),
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         { path: 'cart', component: CartComponent },
         { path: 'shipping', component: ShippingComponent },
         { path: 'products/:productId', component: ProductDetailsComponent },
         { path: 'heroes', component: TourOfHeroesComponent },
         { path: 'hero/:id', component: HeroDetailComponent },
         { path: 'dashboard', component: HeroDashboardComponent },
      ])
   ],
   declarations: [
      AppComponent,
      ProductListComponent,
      TopBarComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      CartComponent,
      ShippingComponent,
      TourOfHeroesComponent,
      HeroDetailComponent,
      HeroMessagesComponent,
      HeroDashboardComponent,
      HeroSearchComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
