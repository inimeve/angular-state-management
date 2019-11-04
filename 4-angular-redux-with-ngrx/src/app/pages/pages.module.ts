import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { SettingsComponent } from './settings/settings.component';
import {CompLibModule} from '../comp-lib/comp-lib.module';
import { CoreModule } from '../core/core.module';
import {StoreModule} from '@ngrx/store';
import * as fromPaymentMethod from '../core/store/payment-method/payment-method.reducer';
import {PaymentMethodEffects} from '../core/store/payment-method/payment-method.effects';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, AllItemsComponent, SettingsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CompLibModule,
    CoreModule,
    StoreModule.forFeature(
      fromPaymentMethod.paymentMethodFeatureKey,
      fromPaymentMethod.reducer
    ),
    EffectsModule.forFeature([PaymentMethodEffects])
  ]
})
export class PagesModule { }
