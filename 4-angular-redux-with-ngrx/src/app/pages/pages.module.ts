import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AllItemsComponent} from './all-items/all-items.component';
import {SettingsComponent} from './settings/settings.component';
import {CompLibModule} from '../comp-lib/comp-lib.module';
import {CoreModule} from '../core/core.module';
import {StoreModule} from '@ngrx/store';
import * as fromPaymentMethod from '../core/store/payment-method/payment-method.reducer';
import * as fromPet from '../core/store/pet/pet.reducer';
import {PaymentMethodEffects} from '../core/store/payment-method/payment-method.effects';
import {EffectsModule} from '@ngrx/effects';
import {PetEffects} from '../core/store/pet/pet.effects';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, AllItemsComponent, SettingsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CompLibModule,
    CoreModule,
    StoreModule.forFeature(
      fromPaymentMethod.paymentMethodFeatureKey,
      fromPaymentMethod.reducer,
    ),
    StoreModule.forFeature(
      fromPet.petKey,
      fromPet.reducer
    ),
    EffectsModule.forFeature([PaymentMethodEffects, PetEffects])
  ]
})
export class PagesModule { }
