import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
   declarations: [
      AppComponent,
      ProductListComponent,
      TopBarComponent,
      ProductAlertsComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
      ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
